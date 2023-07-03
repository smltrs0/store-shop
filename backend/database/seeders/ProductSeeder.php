<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            [
                'name' => 'Basic Tee',
                'href' => '#',
                'imageSrc' => 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
                'imageAlt' => "Front of men's Basic Tee in black.",
                'price' => 35,
                'color' => 'Black',
            ],
            [
                'name' => 'Basic Tee',
                'href' => '#',
                'imageSrc' => 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
                'imageAlt' => "Front of men's Basic Tee in black.",
                'price' => 35,
                'color' => 'Black',
            ],
            [
                'name' => 'Basic Tee',
                'href' => '#',
                'imageSrc' => 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
                'imageAlt' => "Front of men's Basic Tee in black.",
                'price' => 37,
                'color' => 'Black',
            ],
            [
                'name' => 'Basic Tee',
                'href' => '#',
                'imageSrc' => 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
                'imageAlt' => "Front of men's Basic Tee in black.",
                'price' => 55,
                'color' => 'Black',
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }

    }
}


