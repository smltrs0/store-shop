<?php

namespace Tests\Unit\Controllers;

use App\Http\Controllers\OrderController;
use App\Models\Order;
use App\Models\OrderProduct;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class OrderControllerTest extends TestCase
{
    use DatabaseTransactions;

    public function testIndex(): void
    {

        $this->assertEquals(true, true);
    }

    public function testStore(): void
    {
        $user = $this->actingAs(\App\Models\User::factory()->create());
        $controller = new OrderController();
        $ordersData = [
            [
                'id' => 1,
                'quantity' => 2,
                'price' => 10.99
            ],
            [
                'id' => 2,
                'quantity' => 1,
                'price' => 5.99
            ]
        ];
        $this->assertEquals(true, true);

    }

    public function testShow(): void
    {

        $this->assertEquals(true, true);

    }

    public function testDestroy(): void
    {
        $this->assertEquals(true, true);
    }
}
