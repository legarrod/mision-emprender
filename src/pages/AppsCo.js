import React from 'react';
import BottomNavigationFront from '../components/BottomNavigation/BottomNavigationFront';
import ju1 from '../assets/img/neg2.png';
import fi4 from '../assets/img/fi4.png';
import apps1 from '../assets/img/apps1.png';
import apps2 from '../assets/img/appsinformation.png';
import { Link } from 'react-router-dom';
import { GrPrevious } from 'react-icons/gr';

const AppsCo = () => {
	return (
		<div className="mx-5">
			{/* <div className="absolute h-full left-0 z-10">
				<Link to="jueves">
					<GrPrevious
						className="absolute bottom-0 left-0 ml-5"
						style={{ fontSize: '40px', color: '#FF3908' }}
					/>
				</Link>
			</div>

			<div className="absolute  h-full right-0 z-10">
				<Link to="alcaldia">
					{' '}
					<GrNext
						className="absolute bottom-0 right-0 mr-5"
						style={{ fontSize: '40px', color: '#FF3908' }}
					/>
				</Link>
			</div> */}

			<div className=" mt-3 grid w-11/12 grid-cols-2">
				<center>
					<img className="rounded-lg w-full" src={ju1} alt="Mision E" />
				</center>
				<center>
					<img
						className="rounded-lg mt-4 ml-3 w-full"
						src={fi4}
						alt="Mision E"
					/>
				</center>
			</div>
			<p className="text-justify text-sm mx-0 mt-4">
				Programa de MinTIC para promover y potenciar la generación, creación y
				consolidación de negocios a partir del uso de las TIC.{' '}
				<strong>Entre sus servicios ofrece:</strong>
			</p>
			<p className="text-justify text-sm mx-0 mt-4">
				<strong>Formación.</strong> Cursos virtuales gratis.
			</p>
			<p className="text-justify text-sm mx-0 mt-4">
				<strong>Acompañamiento</strong> en etapa temprana a emprendedores y en
				avanzada a empresas.
			</p>
			<p className="text-justify text-sm mx-0 mt-4">
				<strong>RetoLab </strong>
				Potencializar el talento emprendedor digital, a través de procesos de
				innovación abierta.
			</p>

			<div className="grid grid-cols-1">
				<div className=" mt-12">
					<center>
						<img className="rounded-lg w-full" src={apps1} alt="Mision E" />
					</center>
				</div>
			</div>
			<div
				className="p-3 text-sm text-gray-700 mt-12"
				style={{ border: 'solid', borderColor: '#FF3908', borderWidth: '1px' }}
			>
				<div className="flex flex-row">
					<strong>Web: </strong>
					<a href="https://www.apps.co/" target="__blank">
						<p className="ml-2 underline text-blue-500">https://www.apps.co/</p>
					</a>
				</div>
				<div className="flex flex-row">
					<strong>Teléfono: </strong>
					<p className="ml-2"> +57(1) 344 34 60</p>
				</div>
				<div className="flex flex-row">
					<strong>Dirección: </strong>
					<p className="ml-2">
						{' '}
						Edificio Murillo Toro Cra. 8a entre calles 12 y 13 Bogotá, Colombia
					</p>
				</div>
			</div>
			<BottomNavigationFront />
		</div>
	);
};

export default AppsCo;
