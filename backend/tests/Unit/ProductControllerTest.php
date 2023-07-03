<?php

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductTest extends TestCase
{
    use DatabaseTransactions;

    public function testIndex()
    {
        $products = [
            [
                'name' => 'Product 1',
                'href' => 'http://example.com/product1',
                'imageSrc' => 'http://example.com/images/product1.jpg',
                'imageAlt' => 'Product 1 Image',
                'price' => 10.99,
                'color' => 'Red',
            ],
            [
                'name' => 'Product 2',
                'href' => 'http://example.com/product2',
                'imageSrc' => 'http://example.com/images/product2.jpg',
                'imageAlt' => 'Product 2 Image',
                'price' => 19.99,
                'color' => 'Blue',
            ],
        ];

        foreach ($products as $productData) {
            \App\Models\Product::factory()->create($productData);
        }

        User::factory()->create([
            'email' => 'test@example.com',
            'password' => bcrypt('password123'),
        ]);

        $response = $this->postJson('/api/login', [
            'email' => 'test@example.com',
            'password' => 'password123',
        ]);
        $response_token = $response->baseResponse->content();

        $token = json_decode($response_token, true)['token'];

        $responseProduct = $this->postJson('/api/items', [], [
            'Authorization' => 'Bearer ' . $token,
        ]);

        $responseProduct->assertStatus(200);
        $responseProductData = $responseProduct->baseResponse->content();


        $responseData = json_decode($responseProductData, true);


        $this->assertArrayHasKey('data', $responseData);
        $this->assertArrayHasKey('meta', $responseData);

        $this->assertEquals(count($products), $responseData['meta']['pagination']['total']);

        $this->assertCount(count($products), $responseData['data']);

        foreach ($responseData['data'] as $key => $product) {
            $this->assertArrayHasKey('id', $product);
            $this->assertArrayHasKey('type', $product);
            $this->assertArrayHasKey('attributes', $product);

            $this->assertEquals($key + 1, $product['id']);
            $this->assertEquals('products', $product['type']);
            $this->assertEquals($products[$key]['name'], $product['attributes']['name']);
            $this->assertEquals($products[$key]['href'], $product['attributes']['href']);
            $this->assertEquals($products[$key]['imageSrc'], $product['attributes']['imageSrc']);
            $this->assertEquals($products[$key]['imageAlt'], $product['attributes']['imageAlt']);
            $this->assertEquals($products[$key]['price'], $product['attributes']['price']);
            $this->assertEquals($products[$key]['color'], $product['attributes']['color']);
        }
    }
}
