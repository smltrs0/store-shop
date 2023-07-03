<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'href' => $this->faker->url,
            'imageSrc' => $this->faker->imageUrl,
            'imageAlt' => $this->faker->word,
            'price' => $this->faker->randomFloat(2, 0, 100),
            'color' => $this->faker->colorName,
        ];
    }
}
