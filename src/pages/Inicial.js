import React from 'react';
import Logo from '../assets/img/logo.png';
import BottomNavigationFront from '../components/BottomNavigation/BottomNavigationFront';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Inicial = () => {
	return (
		<div className="flex flex-col content-between">
			<div>
				<center>
					<img
						className="mt-5"
						src={Logo}
						alt="Mision E"
						style={{ width: '95%', height: 'auto' }}
					/>
				</center>
			</div>
			<div>
				<p className="text-center font-bold mt-32">
					¿Tienes una idea de negocio?
				</p>
				<p className="text-justify mx-5 mt-5">
					Aquí encontraras un camino que te ayudara a desarrollar tu idea de
					negocio de forma fácil y convertirte en un empresario exitoso.
				</p>
				<p className="text-justify mx-5 mt-5">
					Si ya eres emprendedor también te podemos ayudar a fortalecer tu
					negocio.
				</p>
				<p className="text-center text mx-10 mt-5 italic">
					¡Aquí encontraras El camino del emprendimiento innovador!
				</p>
			</div>
			<div className="mt-20">
				<BottomNavigationFront next={'menu'} back={'/'} />
			</div>
		</div>
	);
};

export default Inicial;
