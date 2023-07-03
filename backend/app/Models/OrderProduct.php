<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderProduct extends Model
{
    protected $table = 'order_product';
    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'price',
    ];

    public function product(){
        return $this->belongsTo(Product::class);
    }

    public function getCreatedAtAttribute($value){
        return Carbon::parse($value)->format('d/m/Y');
    }
}
