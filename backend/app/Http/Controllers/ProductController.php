<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {

            $perPage = $request->input('per_page', 10);
            $products = Product::paginate($perPage);

            $data = [];
            foreach ($products as $product) {
                $data[] = [
                    'id' => $product->id,
                    'type' => 'products',
                    'attributes' => [
                        'id' => $product->id,
                        'name' => $product->name,
                        'href' => $product->href,
                        'imageSrc' => $product->imageSrc,
                        'imageAlt' => $product->imageAlt,
                        'price' => $product->price,
                        'color' => $product->color,
                    ],
                ];
            }
            return response()->json([
                'data' => $data,
                'meta' => [
                    'pagination' => [
                        'total' => $products->total(),
                        'per_page' => $products->perPage(),
                        'current_page' => $products->currentPage(),
                        'last_page' => $products->lastPage(),
                        'from' => $products->firstItem(),
                        'to' => $products->lastItem(),
                    ],
                ],
            ]);
    }

}
