<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;

class ApiRoutePublicTest extends TestCase
{
    public function testRegisterRoute()
    {
        $userData = [
            'name' => 'test test',
            'email' => 'test@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ];

        $response = $this->post('/api/register', $userData);
        $response->assertStatus(201);
    }

    public function testLoginRoute()
    {
        $userData = [
            'name' => 'test test',
            'email' => 'test@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ];

        $this->post('/api/register', $userData);

        $userData = [
            'email' => 'test@example.com',
            'password' => 'password123',
        ];
        $response = $this->post('/api/login', $userData);
        $response->assertStatus(200);
    }

}
