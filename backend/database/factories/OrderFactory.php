<?php
namespace Database\Factories;

use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    protected $model = Order::class;

    public function definition()
    {
        return [
            'user_id' => function () {
                return User::factory()->create()->id;
            },
            'note' => 'a note',
            'deleted_at' => null,
        ];
    }

    public function configure()
    {

    }
}
