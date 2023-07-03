<?php

namespace App\Models;

use App\Models\User;
use App\Models\OrderProduct;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory, SoftDeletes;
    
    protected $dates = ['deleted_at'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function order_products(){
        return $this->hasMany(OrderProduct::class);
    }
}
