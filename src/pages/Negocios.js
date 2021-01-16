import React from 'react';
import BottomNavigationFront from '../components/BottomNavigation/BottomNavigationFront';
import neg from '../assets/img/neg.png';
import neg1 from '../assets/img/neg1.png';
import neg2 from '../assets/img/neg2.png';
import neg3 from '../assets/img/neg3.png';
import neg4 from '../assets/img/neg4.png';
import neg5 from '../assets/img/neg5.png';
import { Link } from 'react-router-dom';

const Negocios = () => {
	return (
		<div className="flex flex-col content-between mx-5">
			<p
				className="text-xl text-center mt-4 mb-8 font-bold"
				style={{ color: '#FF3908' }}
			>
				PLAN DE NEGOCIOS
			</p>
			<p className="text-justify text-sm mx-0 mt-0 mb-1">
				El
				<strong className="text-green-600"> PLAN DE NEGOCIO </strong> es un
				documento donde vas a validar la idea y vas a contar como, cuando,
				donde, con quien, cuanto, cuales, cuando vas a desarrollar tu idea, y
				así llevar tu proyecto a que tenga una alta posibilidad de éxito, a que
				las entidades de apoyo te escuchen, la posibilidad de ganarte una
				convocatoria o de obtener financiación.{' '}
				<strong>Clic en los logos</strong>
			</p>

			<div className="grid grid-cols-1">
				<Link to="apps">
					<div className=" mt-3 w-11/12 grid grid-cols-2">
						<center>
							<img className="rounded-lg shadow-lg" src={neg2} alt="Mision E" />
						</center>
						<p className="text-xs text-justify">
							Valida tu idea, mercado, fortalece las capacidades técnicas en lo
							relacionado a industrias TI
						</p>
					</div>
				</Link>
				<div className=" mt-3 grid w-11/12 grid-cols-2">
					<center>
						<img className="rounded-lg shadow-lg" src={neg1} alt="Mision E" />
					</center>
					<p className="text-xs text-center">©© Para tus proyectos TI</p>
				</div>
				<div className="w-auto mt-2">
					<Link to="alcaldia">
						<div className=" mt-2 grid w-11/12 grid-cols-2">
							<center>
								<img
									className="rounded-lg shadow-lg h-8 mt-3"
									src={neg3}
									alt="Mision E"
								/>
							</center>
							<p className="text-xs text-justify ml-2">
								Realice los tramites de en la Alcaldía Municipal de la Tebaida
							</p>
						</div>
					</Link>
				</div>
				<div className="w-auto mt-2">
					<div className=" mt-2 grid w-11/12 grid-cols-2">
						<center>
							<img
								className="rounded-lg shadow-lg h-8 mt-3"
								src={neg4}
								alt="Mision E"
							/>
						</center>
						<p className="text-xs text-justify ml-2">
							Las empresas del sector comercial y turístico pueden aquí
							encontrar ayuda
						</p>
					</div>
				</div>
				<div className="w-auto mt-2">
					<div className=" mt-2 grid w-11/12 grid-cols-2">
						<center>
							<img
								className="rounded-lg shadow-lg h-8 mt-3"
								src={neg5}
								alt="Mision E"
							/>
						</center>
						<p className="text-xs text-justify ml-2">
							El sector de la construcción, tecnología e industrial confluyen
							aquí
						</p>
					</div>
				</div>
			</div>
			<BottomNavigationFront next={'legalidad'} back={'inicia'} />
		</div>
	);
};

export default Negocios;
