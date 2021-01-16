import React from 'react';
import emp1 from '../assets/img/le3.png';
import emp2 from '../assets/img/cama.png';
import emp3 from '../assets/img/cama1.png';
import BottomNavigationFront from '../components/BottomNavigation/BottomNavigationFront';

const Camara = () => {
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
				<img className="rounded-lg h-20" src={emp1} alt="Mision E" />

				<p
					className="text-sm text-center mt-1 font-bold"
					style={{ color: '#FF3908' }}
				>
					Cámara de comercio de Armenia y del Quindío
				</p>
			</div>
			<p className="text-justify text-sm mx-0 mt-4">
				Emprendedores y empresarios encuentran una serie de servicios de apoyo
				como son:
			</p>
			<p className="text-justify text-sm mx-0 mt-4">
				<strong>Formación.</strong> Formar, aprender, emprender y así competir
				en el mercado nacional e internacional
			</p>
			<p className="text-justify text-sm mx-0 mt-4">
				<strong>Centro de transformación digital. </strong>
				Apoyo a MIPYMES en la transformación digital, buscando aumentar la
				productividad y competencias digitales.
			</p>
			<p className="text-justify text-sm mx-0 mt-4">
				<strong>Estudios e investigaciones. </strong>Material de apoyo para el
				plan de negocio o planes de desarrollo y marketing
			</p>

			<div className="grid grid-cols-1">
				<div className=" mt-12">
					<center>
						<img className="rounded-lg w-8/12" src={emp2} alt="Mision E" />
					</center>
				</div>
			</div>
			<div
				className="p-3 text-sm text-gray-700 mt-12"
				style={{ border: 'solid', borderColor: '#FF3908', borderWidth: '1px' }}
			>
				<div className="flex flex-row">
					<strong>Informes: </strong>
					<p className="ml-2">
						Cámara de comercio, Oficina La Tebaida, Zona externa del CAM. En
						Plaza Bolívar, Cr6 12-27
					</p>
				</div>
				<div className="flex flex-row">
					<strong>Contacto: </strong>
					<p className="ml-2">Jaime Restrepo</p>
				</div>
				<div className="flex flex-row">
					<strong>Email: </strong>
					<p className="ml-2 text-blue-500">
						camaralatebaida@camaraarmenia.org.co
					</p>
				</div>
				<div className="flex flex-row">
					<strong>Web: </strong>
					<a href="https://camaraarmenia.org.co/" target="__blank">
						<p className="ml-2 underline text-blue-500">
							https://camaraarmenia.org.co/
						</p>
					</a>
				</div>
				<div className="flex flex-row">
					<strong>Celular: </strong>
					<p className="ml-2"> 317 2764947</p>
				</div>
			</div>
			<BottomNavigationFront />
		</div>
	);
};

export default Camara;
