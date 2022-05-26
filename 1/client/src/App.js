import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Contacts from './pages/where'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Product from './pages/Product'
import SecondProduct from './pages/SecondProduct'
import Admin from './pages/admin'
import Catalog from './pages/Catalog'
import NavBar from './components/NavBar'
import Error from './pages/Error'

import user from './store/user'
import { observer } from 'mobx-react-lite'
import role from './store/role'
import Cart from './pages/Cart'
import Cabinet from './pages/Cabinet'

function App() {
	console.log(localStorage.getItem('role'))
	console.log(localStorage.getItem('id'))
	useEffect(() => {
		console.log(role.getRole())
		if (localStorage.getItem('role')) {
			role.getRole()
		}
	}, [])
	return (
		<div className='App'>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/catalog' element={<Catalog />} />
					<Route path='/where' element={<Contacts />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/signin' element={<Signin />} />
					<Route path='/product' element={<Product />} />
					<Route path='/secondproduct' element={<SecondProduct />} />
					{user.auth ? (
						<>
							<Route path='/cart' element={<Cart />} />
							<Route path='/cabinet' element={<Cabinet />} />
							{role.isAdmin ? (
								<Route path='/admin' element={<Admin />} />
							) : (
								<></>
							)}
						</>
					) : (
						<></>
					)}

					<Route path='*' element={<Error />} />
				</Routes>
			</BrowserRouter>
		
		</div>
	)
}
export default observer(App)
