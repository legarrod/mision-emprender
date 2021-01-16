import React from 'react';
import Logo from '../assets/img/logo.png';
import HomeImag from '../assets/img/home1.jpg';
import { Link } from 'react-router-dom';
const Home = () => {
	return (
		<div className="">
			<center>
				<img
					className="mt-20 mb-24"
					src={Logo}
					alt="Mision E"
					style={{ width: '95%', height: 'auto' }}
				/>
			</center>
			<div className="mt-24">
				<center>
					<img
						src={HomeImag}
						alt="Emprender"
						className=""
						style={{ width: '95%', height: 'auto' }}
					/>
				</center>
			</div>
			<Link to="/init">
				<p
					className="text-right font-bold mt-5 mr-5"
					style={{ color: '#FF3908' }}
				>
					Siguiente
				</p>
			</Link>
		</div>
	);
};

export default Home;
