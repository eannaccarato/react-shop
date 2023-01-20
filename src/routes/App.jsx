import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState'
import '../styles/global.css';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path="/react-shop/" element={<Home />} />
						<Route exact path="/react-shop/login" element={<Login />} />
						<Route exact path="/react-shop/password-recovery" element={<PasswordRecovery />} />
						<Route exact path="/react-shop/send-email" element={<SendEmail />} />
						<Route exact path="/react-shop/new-password" element={<NewPassword />} />
						<Route exact path="/react-shop/account" element={<MyAccount />} />
						<Route exact path="/react-shop/signup" element={<CreateAccount />} />
						<Route exact path="/react-shop/checkout" element={<Checkout />} />
						<Route exact path="/react-shop/orders" element={<Orders />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
