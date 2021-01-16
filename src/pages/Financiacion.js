import React from 'react';
import BottomNavigationFront from '../components/BottomNavigation/BottomNavigationFront';
import fi1 from '../assets/img/fi1.png';
import fi2 from '../assets/img/fi2.png';
import fi3 from '../assets/img/fi3.png';
import fi4 from '../assets/img/fi4.png';
import { Link } from 'react-router-dom';

const Financiacion = () => {
	return (
		<div className="flex flex-col content-between mx-5">
			<p
				className="text-xl text-center mt-4 mb-8 font-bold"
				style={{ color: '#FF3908' }}
			>
				FINANCIACIÓN DE LA EMPRESA
			</p>
			<p className="text-justify text-sm mx-0 mt-0 mb-1">
				Normalmente todo negocio requiere capital para implementarse o para
				mejorarse. Ellos te pueden ayudar a financiar tu idea de negocio.
			</p>
			<p className="text-justify font-bold text-sm mx-0 mt-0 mb-1">
				Dar clic en los logos
			</p>

			<div className="flex content-between flex-wrap">
				<Link to="emprender">
					<div className=" mt-10 w-11/12 grid grid-cols-2">
						<p className="text-xs text-justify">
							Fondo emprender del SENA firmó convenio para el apoyo exclusivo de
							emprendedores del Municipio de La Tebaida
						</p>

						<center>
							<img
								className="rounded-lg ml-5 shadow-lg h-10"
								src={fi3}
								alt="Mision E"
							/>
						</center>
					</div>
				</Link>
				<div className=" mt-10 w-11/12 grid grid-cols-2">
					<p className="text-xs text-justify">
						Banco propiedad del Estado, especializado en líneas de crédito para
						el sector primario (agrícola, ganadería, avicultura, apicultura)
					</p>

					<center>
						<img
							className="rounded-lg ml-5 shadow-lg h-10"
							src={fi2}
							alt="Mision E"
						/>
					</center>
				</div>
				<div className=" mt-10 w-11/12 grid grid-cols-2">
					<p className="text-xs text-justify">
						Banco de La Fundación Mundo Mujer que tiene líneas de crédito para
						la parte comercial, agropecuaria y Pymes.
					</p>

					<center>
						<img
							className="rounded-lg ml-5 shadow-lg h-10"
							src={fi1}
							alt="Mision E"
						/>
					</center>
				</div>
				<div className=" mt-10 w-11/12 grid grid-cols-2">
					<p className="text-xs text-justify">
						El Ministerio de Cultura abre convocatorias para empresas de
						economía naranja y empresas creativas
					</p>

					<center>
						<img
							className="rounded-lg ml-5 shadow-lg h-8"
							src={fi4}
							alt="Mision E"
						/>
					</center>
				</div>
			</div>
			<BottomNavigationFront next={'fortalecimiento'} back={'legalidad'} />
		</div>
	);
};

export default Financiacion;
