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
			{
				orders.length === 0 ? (
					<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
						<div className="bg-red-500 text-white px-4 py-2 rounded">
							<p className="font-bold text-center">¡Atención!</p>
							<p>No hay pedidos creados en este momento.</p>
						</div>
					</div>
				) : (
					orders.map((order, index) => (
						<OrderItem
							key={order.id}
							order={order}
							index={index}
							handleDeleteOrder={handleDeleteOrder}
							handleShowOrder={handleShowOrder}
						/>
					))
				)

			}

		</div>
	);
};

export default OrderList;