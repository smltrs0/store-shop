<?php

namespace Tests\Unit;

use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Mockery;
use Tests\TestCase;

class UserControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testAuthenticateWithValidCredentials()
    {
        $user = User::factory()->create([
            'email' => 'test@example.com',
            'password' => Hash::make('password')
        ]);

        $request = Request::create('/items', 'POST', [
            'email' => 'test@example.com',
            'password' => 'password'
        ]);

        $controller = new UserController();
        $response = $controller->authenticate($request);

        $this->assertEquals(200, $response->getStatusCode());

        $content = json_decode($response->getContent(), true);
        $this->assertArrayHasKey('token', $content);
    }

    public function testAuthenticateWithInvalidCredentials()
    {
        $request = Request::create('/authenticate', 'POST', [
            'email' => 'test@example.com',
            'password' => 'wrongpassword'
        ]);

        $controller = new UserController();
        $response = $controller->authenticate($request);

        $this->assertEquals(400, $response->getStatusCode());
        $content = json_decode($response->getContent(), true);
        $this->assertEquals('invalid_credentials', $content['error']);
    }

    public function testRegisterWithValidData()
    {
        $request = Request::create('/register', 'POST', [
            'name' => 'John Doe',
            'email' => 'test@example.com',
            'password' => 'password',
            'password_confirmation' => 'password'
        ]);

        $controller = new UserController();
        $response = $controller->register($request);

        $this->assertEquals(201, $response->getStatusCode());

        $content = json_decode($response->getContent(), true);
        $this->assertArrayHasKey('user', $content);
        $this->assertArrayHasKey('token', $content);
    }

    public function testRegisterWithInvalidData()
    {
        $request = Request::create('/register', 'POST', [
            'name' => 'John Doe',
            'email' => 'test@example.com',
            'password' => 'password',
            'password_confirmation' => 'wrong_password'
        ]);

        $controller = new UserController();
        $response = $controller->register($request);

        $this->assertEquals(400, $response->getStatusCode());
    }


}
