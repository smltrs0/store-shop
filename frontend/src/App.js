import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductListPage from './pages/ProductListPage';
import Navigation from './components/Navigation';
import ProtectedRoute from './components/ProtectedRoute';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';
import Wellcome from './pages/Wellcome';
import { useSelector } from 'react-redux';
import RegisterPage from './pages/RegisterPage';
import OrderPage from './pages/OrdersPage';
import OrderDetail from './pages/OrderDetail';

function App() {

	const sessionUser = useSelector((state) => state.auth);

	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route index element={<Wellcome />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<RegisterPage />} />
				<Route element={<ProtectedRoute auth={sessionUser} />}>
					<Route path='products' element={<ProductListPage />} />
					<Route path='home' element={<Home />} />
					<Route path='car' element={<CartPage />} />
					<Route path='orders' element={<OrderPage />} />
					<Route path='order-detail/:orderId' element={<OrderDetail />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;