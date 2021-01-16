import React from 'react';
import m1 from '../assets/img/m1.jpg';
import m2 from '../assets/img/m2.jpg';
import m3 from '../assets/img/m3.jpg';
import m4 from '../assets/img/m4.png';
import m5 from '../assets/img/m5.jpg';
import m6 from '../assets/img/m6.jpg';
import m7 from '../assets/img/m7.jpg';
import m8 from '../assets/img/information.png';
import { Link } from 'react-router-dom';
import BottomNavigationFront from '../components/BottomNavigation/BottomNavigationFront';

const Menu = () => {
	return (
		<div className="flex flex-col content-between mx-5">
			<p
				className="text-3xl text-center mt-4 font-bold"
				style={{ color: '#FF3908' }}
			>
				MENU
			</p>
			<div className="m-4 flex flex-wrap  justify-center">
				<Link to="form">
					<div className="w-32 mb-5 ">
						<p className="text-xs text-center font-bold text-green-700 mb-1">
							PERSONALIZAR LA AYUDA
						</p>
						<center>
							<img
								className="rounded-lg shadow-lg"
								src={m1}
								alt="Mision E"
								style={{
									width: '80px',
									height: '80px',
									objectFit: 'cover',
								}}
							/>
						</center>
					</div>
				</Link>
				<Link to="inicia">
					<div className="w-32 mb-5">
						<p className="text-xs text-center font-bold text-black mb-1">
							Emprendedores que inician
						</p>
						<center>
							<img
								className="rounded-lg shadow-lg"
								src={m2}
								alt="Mision E"
								style={{
									width: '80px',
									height: '80px',
									objectFit: 'cover',
								}}
							/>
						</center>
					</div>
				</Link>
				<Link to="negocios">
					<div className="w-32 mb-5 mt-3">
						<p className="text-xs text-center font-bold text-black mb-1">
							Construir Plan de negocios
						</p>
						<center>
							<img
								className="rounded-lg shadow-lg"
								src={m3}
								alt="Mision E"
								style={{
									width: '80px',
									height: '80px',
									objectFit: 'cover',
								}}
							/>
						</center>
					</div>
				</Link>
				<Link to="legalidad">
					<div className="w-32 mb-5 mt-3">
						<p className="text-xs text-center font-bold text-black mb-1">
							Legalidad del emprendimiento
						</p>
						<center>
							<img
								className="rounded-lg shadow-lg"
								src={m4}
								alt="Mision E"
								style={{
									width: '80px',
									height: '80px',
									objectFit: 'cover',
								}}
							/>
						</center>
					</div>
				</Link>
				<Link to="financiacion">
					<div className="w-32 mb-5 mt-3">
						<p className="text-xs text-center font-bold text-black mb-1">
							Financiación de la empresa
						</p>
						<center>
							<img
								className="rounded-lg shadow-lg"
								src={m5}
								alt="Mision E"
								style={{
									width: '80px',
									height: '80px',
									objectFit: 'cover',
								}}
							/>
						</center>
					</div>
				</Link>
				<Link to="fortalecimiento">
					<div className="w-32 mb-5 mt-3">
						<p className="text-xs text-center font-bold text-black mb-1">
							Fortalecimiento empresarial
						</p>
						<center>
							<img
								className="rounded-lg shadow-lg"
								src={m6}
								alt="Mision E"
								style={{
									width: '80px',
									height: '80px',
									objectFit: 'cover',
								}}
							/>
						</center>
					</div>
				</Link>
				<Link to="expertos">
					<div className="w-32 mb-5 mt-3">
						<p className="text-xs text-center font-bold text-black mb-1">
							Los empresarios de La Tebaida te quieren ayudar
						</p>
						<center>
							<img
								className="rounded-lg shadow-lg"
								src={m7}
								alt="Mision E"
								style={{
									width: '80px',
									height: '80px',
									objectFit: 'cover',
								}}
							/>
						</center>
					</div>
				</Link>
				<Link to="final">
					<div className="w-32 mb-5 mt-3">
						<p className="text-xs mt-6 text-center font-bold text-black mb-1">
							Información de esta aplicación
						</p>
						<center>
							<img
								className="rounded-lg shadow-lg"
								src={m8}
								alt="Mision E"
								style={{
									width: '80px',
									height: '80px',
									objectFit: 'cover',
								}}
							/>
						</center>
					</div>
				</Link>
			</div>
			<BottomNavigationFront next={'form'} back={'init'} />
		</div>
	);
};

export default Menu;
