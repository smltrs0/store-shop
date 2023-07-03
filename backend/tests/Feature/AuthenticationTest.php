<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;


    public function testSuccessfulAuthentication()
    {
        $user = User::factory()->create([
            'email' => 'testauth@example.com',
            'password' => bcrypt('password123'),
        ]);

        $response = $this->postJson('/api/login', [
            'email' => 'testauth@example.com',
            'password' => 'password123',
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure(['token']);
    }


    public function testFailedAuthenticationInvalidCredentials()
    {
        $response = $this->postJson('/api/login', [
            'email' => 'invalid@example.com',
            'password' => 'invalidpassword',
        ]);

        $response->assertStatus(400)
            ->assertJson(['error' => 'invalid_credentials']);
    }

    public function testGetAuthenticatedUser()
    {
        User::factory()->create([
            'email' => 'GetAuthenticatedUser@example.com',
            'password' => bcrypt('password123'),
        ]);

        $response = $this->postJson('/api/login', [
            'email' => 'GetAuthenticatedUser@example.com',
            'password' => 'password123',
        ]);
       $response_token = $response->baseResponse->content();

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . json_decode($response_token, true)['token'],
        ])->postJson('/api/user');

        $response->assertStatus(200)
            ->assertJsonStructure(['user']);
    }


    public function testSuccessfulUserRegistration()
    {
        $userData = [
            'name' => 'John Doe',
            'email' => 'john.doe@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ];

        $response = $this->postJson('/api/register', $userData);

        $response->assertStatus(201)
            ->assertJsonStructure(['user', 'token']);
    }


    public function testFailedUserRegistrationValidation()
    {
        $response = $this->postJson('/api/register', [
            'name' => 'John Doe',
            'email' => 'invalid-email',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ]);

        $response->assertStatus(400);
        /* Nice to have :
            -Validar todos los campos
        */
    }
}
