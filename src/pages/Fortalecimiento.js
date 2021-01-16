import React from 'react';
import BottomNavigationFront from '../components/BottomNavigation/BottomNavigationFront';
import { Link } from 'react-router-dom';

import le3 from '../assets/img/le3.png';
import neg1 from '../assets/img/neg1.png';
import neg2 from '../assets/img/neg2.png';

const Fortalecimiento = () => {
	return (
		<div className="h-screen mx-5">
			<p
				className="text-xl text-center mt-4 mb-8 font-bold"
				style={{ color: '#FF3908' }}
			>
				FORTALECIMIENTO EMPRESARIAL
			</p>
			<p className="text-justify text-sm mx-0 mt-0 mb-1">
				Ya tu emprendimiento viene funcionando, pero requieres fortalecerlo, con
				capacitación, acompañamiento, inyección financiera, aquí te pueden
				ayudar.
				<strong> Clic en los logos</strong>
			</p>
			<Link to="camara">
				<div className=" mt-16 w-11/12 grid grid-cols-2">
					<center>
						<img
							className="rounded-lg shadow-lg h-20"
							src={le3}
							alt="Mision E"
						/>
					</center>
					<p className="text-xs text-justify">
						Todo sobre el Registro mercantil, formación y apoyo al emprendedor y
						a la empresa
					</p>
				</div>
			</Link>
			<center>
				<img
					className="rounded-lg shadow-lg h-8 mt-16"
					src={neg1}
					alt="Mision E"
				/>
			</center>
			<p className="mt-1 text-justify text-sm mx-0 mb-1">
				Brinda acompañamiento y seguimiento continuo para el desarrollo de las
				ideas de negocio y/o emprendimiento, el fortalecimiento de los ya están
				implementados y que estén relacionados con el sector TIC
			</p>
			<div className=" mt-16 w-11/12 grid grid-cols-2">
				<center>
					<img
						className="rounded-lg shadow-lg mt-4 h-10"
						src={neg2}
						alt="Mision E"
					/>
				</center>
				<p className="text-xs text-justify">
					Plataforma del Ministerio de las TIC que apoya los emprendedores y
					empresarios digitales
				</p>
			</div>
			<BottomNavigationFront next={'expertos'} back={'financiacion'} />
		</div>
	);
};

export default Fortalecimiento;
