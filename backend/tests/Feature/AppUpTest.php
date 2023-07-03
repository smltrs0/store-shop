<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AppUpTest extends TestCase
{

    public function test_app_up()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}
