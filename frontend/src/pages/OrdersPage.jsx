import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, getOrders } from '../features/orders/orderAction';
import { useNavigate } from 'react-router-dom';
import { clearOrderMessage } from '../features/orders/orderSlice';
import Toast from '../components/Toast';
import OrderItem from '../components/Orders/OrderItem';

const OrderList = () => {
	const orders = useSelector((state) => state.order.order_items.data);
	const orderDeleteMesage = useSelector((state) => state.order.orderDeleteMesage);
	const dispatch = useDispatch();
	const navigate = useNavigate();
  
	useEffect(() => {
	  dispatch(getOrders());
	}, []);
  
	const handleDeleteOrder = (orderId) => {
	  dispatch(deleteOrder(orderId));
	};
  
	const handleShowOrder = (orderId) => {
	  navigate(`/order-detail/${orderId}`);
	};
  
	useEffect(() => {
	  if (orderDeleteMesage) {
		Toast.fire({
		  icon: 'success',
		  title: orderDeleteMesage
		});
	  }
	  dispatch(clearOrderMessage());
	}, [orderDeleteMesage]);
  
	return (
	  <div className="flex flex-wrap">
		{orders.map((order, index) => (
		  <OrderItem
			key={order.id}
			order={order}
			index={index}
			handleDeleteOrder={handleDeleteOrder}
			handleShowOrder={handleShowOrder}
		  />
		))}
	  </div>
	);
  };
  
  export default OrderList;