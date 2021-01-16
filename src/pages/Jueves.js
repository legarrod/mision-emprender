import React from 'react';
import BottomNavigationFront from '../components/BottomNavigation/BottomNavigationFront';
import ju1 from '../assets/img/ju1.png';
import ju2 from '../assets/img/ju2.jpg';
import ju3 from '../assets/img/ju3.png';
import { Link } from 'react-router-dom';
import { GrNext, GrPrevious } from 'react-icons/gr';

const Jueves = () => {
	return (
		<div className="mx-5">
			{/* <div className="absolute h-full left-0 z-10">
				<Link to="expertos">
					<GrPrevious
						className="absolute bottom-0 left-0 ml-5"
						style={{ fontSize: '40px', color: '#FF3908' }}
					/>
				</Link>
			</div>

			<div className="absolute  h-full right-0 z-10">
				<Link to="apps">
					{' '}
					<GrNext
						className="absolute bottom-0 right-0 mr-5"
						style={{ fontSize: '40px', color: '#FF3908' }}
					/>
				</Link>
			</div> */}
			<div className=" mt-3">
				<center>
					<img className="rounded-lg w-full" src={ju1} alt="Mision E" />
				</center>
			</div>
			<p className="text-justify text-sm mx-0 mt-0">
				Los Jueves de Emprendimiento son un espacio pensado para que conozcas
				todo lo que necesitas saber para crear empresa. ¿Eres nuevo
				emprendiendo? ¿Quieres conocer más sobre Economía Naranja e innovación?
				¿Quieres fortalecer tu empresa? Si tu respuesta es sí, conéctate todos
				los jueves a través de Facebook Live y aprende de los mejores.
			</p>
			<div className="grid grid-cols-1">
				<div className=" mt-10">
					<center>
						<img className="rounded-lg w-full" src={ju2} alt="Mision E" />
					</center>
				</div>
			</div>
			<div
				className="p-3 text-sm text-gray-700 mt-12"
				style={{ border: 'solid', borderColor: '#FF3908', borderWidth: '1px' }}
			>
				<div className="flex flex-row">
					<strong>Informes: </strong>
					<p className="ml-2">SENA Regional Quindío</p>
				</div>
				<div className="flex flex-row">
					<strong>Instructor: </strong>
					<p className="ml-2">Javier Peña</p>
				</div>
				<div className="flex flex-row">
					<strong>Email: </strong>
					<p className="ml-2 text-blue-500">emprender@sena.quindio.gopv.co</p>
				</div>
				<div className="flex flex-row">
					<strong>Web: </strong>
					<a href="http://www.fondoemprender.com/" target="__blank">
						<p className="ml-2 underline text-blue-500">
							http://www.fondoemprender.com/
						</p>
					</a>
				</div>
				<div className="flex flex-row">
					<strong>Celular: </strong>
					<p className="ml-2"> 3178915153</p>
				</div>
			</div>
			<div className="mt-5">
				<BottomNavigationFront />
			</div>
		</div>
	);
};

export default Jueves;
