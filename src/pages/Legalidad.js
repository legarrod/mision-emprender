import React from 'react';
import BottomNavigationFront from '../components/BottomNavigation/BottomNavigationFront';
import le1 from '../assets/img/le1.png';
import le2 from '../assets/img/le2.png';
import le3 from '../assets/img/le3.png';
import le4 from '../assets/img/le4.png';
import le5 from '../assets/img/le5.jpg';
import { Link } from 'react-router-dom';

const Legalidad = () => {
	return (
		<div className="flex flex-col content-between mx-5">
			<p
				className="text-xl text-center mt-4 mb-8 font-bold"
				style={{ color: '#FF3908' }}
			>
				LEGALIDAD DEL EMPRENDIMIENTO
			</p>
			<p className="text-justify text-sm mx-0 mt-0 mb-1">
				Es importante que el emprendedor realice su actividad bajo todos los
				parámetros de ley. Dando clic en las figuras podrás encontrar los
				principales requisitos legales que debe cumplir un negocio que inicia{' '}
				<strong>Clic en los logos</strong>
			</p>

			<div className="grid grid-cols-1">
				<Link to="alcaldia">
					<div className=" mt-10 grid w-11/12 grid-cols-2">
						<center>
							<img
								className="rounded-lg shadow-lg h-16"
								src={le4}
								alt="Mision E"
							/>
						</center>
						<p className="text-xs text-justify">
							Realice los tramites de en la Alcaldía Municipal de la Tebaida
						</p>
					</div>
				</Link>

				<div className=" mt-10 w-11/12 grid grid-cols-2">
					<center>
						<img
							className="rounded-lg shadow-lg h-12"
							src={le2}
							alt="Mision E"
						/>
					</center>
					<p className="text-xs text-justify">
						Obtener el RUT y otros trámites para emprendedores y empresarios
					</p>
				</div>
				<div className=" mt-10 grid w-11/12 grid-cols-2">
					<center>
						<img
							className="rounded-lg shadow-lg h-16"
							src={le3}
							alt="Mision E"
						/>
					</center>
					<p className="text-xs text-justify">
						Registro mercantil y otros trámites en La Cámara de Comercio
					</p>
				</div>
				<div className=" mt-10 grid w-11/12 grid-cols-2">
					<center>
						<img
							className="rounded-lg shadow-lg h-16"
							src={le1}
							alt="Mision E"
						/>
					</center>
					<p className="text-xs text-justify">
						Acta de constitución de la sociedad y otros tramites se realizan en
						la Notaria de La Tebaida
					</p>
				</div>
				<div className=" mt-10 grid w-11/12 grid-cols-2 mb-2">
					<center>
						<img
							className="rounded-lg shadow-lg h-12"
							src={le5}
							alt="Mision E"
						/>
					</center>
					<p className="text-xs text-justify">
						Solicite a la Alcaldía de la Tebaida la autorización del protocolo
						de Bioseguridad de su negocio o emprendimiento.
					</p>
				</div>
			</div>
			<BottomNavigationFront next={'financiacion'} back={'negocios'} />
		</div>
	);
};

export default Legalidad;
