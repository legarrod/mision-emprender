import React from 'react';
import emp1 from '../assets/img/emp1.png';
import emp2 from '../assets/img/ingAle.png';
import emp3 from '../assets/img/ingAle2.png';
import BottomNavigationFront from '../components/BottomNavigation/BottomNavigationFront';

const Ingeniero = () => {
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
				<img className="rounded-lg h-20" src={emp1} alt="Mision E" />

				<p
					className="text-base text-center mt-1 font-bold"
					style={{ color: '#FF3908' }}
				>
					Ingeniero Alejandro Buitrago
				</p>
			</div>
			<p className="text-justify text-sm mx-0 mt-4">
				Emprendedor joven de la Tebaida, pero con bastante experiencia en crear
				empresa. Es ingeniero electrónico de la Universidad del Quindío, con
				experiencia en docencia y en la industria de las comunicaciones.
			</p>
			<p className="text-justify text-sm mx-0 mt-4">
				Es propietario de varios negocios como la empresa de ingeniería
				eléctrica y automatización{' '}
				<strong>Lab Ingeniería y el Bar Almendros</strong> de La Tebaida Quindío
			</p>
			<p className="text-justify text-sm mx-0 mt-4">
				Alejandro puede ayudarte en conocer el proceso de emprender, plan de
				negocios, proyectos y el montaje de una empresa
			</p>

			<div className="grid grid-cols-1">
				<div className=" mt-3">
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
					<p className="ml-2">Alejandro Buitrago</p>
				</div>

				<div className="flex flex-row">
					<strong>Email: </strong>
					<p className="ml-2 text-blue-500"> labingenierria@gmail.com</p>
				</div>
				<div className="flex flex-row">
					<strong>Web: </strong>
					<a
						href="https://labingenieria.principalwebsite.com/"
						target="__blank"
					>
						<p className="ml-2 underline text-blue-500">
							https://labingenieria.principalwebsite.com/
						</p>
					</a>
				</div>
				<div className="flex flex-row">
					<strong>Celular: </strong>
					<p className="ml-2"> 300 4527289</p>
				</div>
			</div>
			<BottomNavigationFront />
		</div>
	);
};

export default Ingeniero;
