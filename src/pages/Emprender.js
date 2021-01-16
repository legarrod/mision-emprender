import React from 'react';
import emp1 from '../assets/img/fi3.png';
import emp2 from '../assets/img/emp5.png';
import emp3 from '../assets/img/emp6.png';
import BottomNavigationFront from '../components/BottomNavigation/BottomNavigationFront';

const Emprender = () => {
	return (
		<div className="flex flex-col content-between mx-5">
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
				<img className="rounded-lg h-10 mt-3" src={emp1} alt="Mision E" />

				<p
					className="text-base text-center mt-1 font-bold"
					style={{ color: '#FF3908' }}
				>
					Fondo emprender del SENA Quindío
				</p>
			</div>
			<p className="text-justify text-sm mx-0 mt-4">
				Programa que brinda apoyo a los emprendedores de La Tebaida. Entre sus
				líneas están las siguientes:
			</p>
			<p className="text-justify text-sm mx-0 mt-4">
				Ruta
				<strong> emprendedora. </strong> Ruta desde la motivación a emprender
				hasta consolidar el negocio.
			</p>
			<p className="text-justify text-sm mx-0 mt-4">
				<strong>Crecimiento empresarial. </strong>
				Ruta para fortalecer los emprendimientos
			</p>
			<p className="text-justify text-sm mx-0 mt-4">
				<strong>Modelo 4K. </strong>
				Capital psicológico (Formación), capital social (red de emprendedores),
				Capital soporte (Acompañamiento) y Capital semilla (Reciursos)
			</p>
			<p className="text-justify text-sm mx-0 mt-4">
				<strong>Convenio Fondo Emprender- Alcaldía de la Tebaida </strong>
				Permite a los emprendedores acceder de forma exclusiva a los servicios
				del fondo y con recursos por 800 millones de pesos
			</p>

			<div className="grid grid-cols-1">
				<div className=" mt-3">
					<center>
						<img className="rounded-lg w-8/12" src={emp2} alt="Mision E" />
					</center>
				</div>
			</div>
			<div
				className="p-3 text-sm text-gray-700 mt-5"
				style={{ border: 'solid', borderColor: '#FF3908', borderWidth: '1px' }}
			>
				<div className="flex flex-row">
					<strong>Informes: </strong>
					<p className="ml-2">
						Centro de desarrollo empresarial SENA Dirección de competitividad y
						turismo Alcaldía de la Tebaida
					</p>
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
					<p className="ml-2"> 3178915156</p>
				</div>
			</div>
			<BottomNavigationFront />
		</div>
	);
};

export default Emprender;
