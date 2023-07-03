<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderProduct;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $orders = Order::with(['user', 'order_products.product'])
        ->where('user_id', auth()->user()->id)
        ->get();

        return response()->json([
            'data' => $orders
        ]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $orders = json_decode($request->input('orders'), true);

        DB::transaction(function () use ($orders) {
            $order = new Order();
            $order->user_id = auth()->user()->id;
            $order->save();
            foreach ($orders as $orderData) {

                $orderProduct = new OrderProduct();
                $orderProduct->order_id = $order->id;
                $orderProduct->product_id = $orderData['id'];
                $orderProduct->quantity = $orderData['quantity'];
                $orderProduct->price = $orderData['price'];
                $orderProduct->save();
            }
        });

        return response()->json(['message' => 'Orders and OrderProducts created successfully']);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = Order::with(['user', 'order_products.product'])->findOrFail($id);
        return response()->json($order);
    }


    /**
     * Deletes an order.
     *
     * @param Request $request The request object containing the order ID.
     *
     * @throws N/A
     * @return JsonResponse The JSON response indicating the result of the deletion.
     */
    public function destroy(Request $request): JsonResponse
    {
        $order = Order::find($request->id);
        if($order->delete()){
            return response()->json(['message' => 'Order deleted successfully']);
        }else{
            return response()->json(['message' => 'Order not deleted']);
        }
    }
}
