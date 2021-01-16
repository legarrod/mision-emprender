import React, { useEffect, useState } from 'react';
import BottomNavigationFront from '../components/BottomNavigation/BottomNavigationFront';
import ini1 from '../assets/img/ju1.png';
import ini2 from '../assets/img/ini3.png';
import ini3 from '../assets/img/neg2.png';
import { Link } from 'react-router-dom';

const Recomendamos = () => {
	const [nameUser, setNameUser] = useState('');

	useEffect(() => {
		setNameUser(sessionStorage.getItem('nombredeusuario'));
	}, []);

	return (
		<div className="mx-5  ">
			<div>
				<p
					className="text-3xl text-center mt-5 font-bold"
					style={{ color: '#FF3908' }}
				>
					Te recomendamos este plan de acción
				</p>
			</div>
			<div>
				<p className="text-justify text-sm mx-0 mt-3 mb-1 flex flex-row">
					Hola {nameUser ? nameUser : 'Usuario'}, bienvenido a{' '}
					<div className="ml-2 font-semibold" style={{ color: '#FF3908' }}>
						Misión E.
					</div>
				</p>
				<p className=" text-justify text-sm mx-0 mt-0 mb-1">
					Según tu información eres un
					<strong> Emprendedor que inicia</strong>, del sector de las
					<strong> Tecnologías.</strong> Te recomendamos consultar las
					siguientes secciones:
				</p>
			</div>
			<div className="text-center mt-4">
				<Link to="jueves">
					<strong>Jueves de emprendimiento </strong>
					<center>
						<img
							className="rounded-lg shadow-lg h-8 mt-1"
							src={ini1}
							alt="Mision E"
						/>
					</center>
				</Link>
				<br />
				<Link to="inicia">
					<strong>Impulsa </strong>
					<center>
						<img
							className="rounded-lg shadow-lg h-8 mt-1"
							src={ini2}
							alt="Mision E"
						/>
					</center>
				</Link>
				<br />
				<Link to="apps">
					<strong>Apps.co</strong>
					<center>
						<img
							className="rounded-lg shadow-lg h-8 mt-1 mb-3"
							src={ini3}
							alt="Mision E"
						/>
					</center>
				</Link>
			</div>
			<div>
				<p className="text-justify text-sm mx-0 mt-0 mb-1">
					Es un gran camino el que estas iniciando y queremos ayudarte,
					mostrándote el ecosistema de emprendimiento y empresarismo del
					Municipio de la Tebaida.
				</p>
			</div>
			<BottomNavigationFront />
		</div>
	);
};

export default Recomendamos;
