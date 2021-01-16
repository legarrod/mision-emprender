import React from 'react';
import BottomNavigationFront from '../components/BottomNavigation/BottomNavigationFront';
import ju1 from '../assets/img/le4.png';
import alcal1 from '../assets/img/alcal1.png';
import alcal2 from '../assets/img/alcal2.png';
import { Link } from 'react-router-dom';
import { GrPrevious } from 'react-icons/gr';
const Alcaldia = () => {
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
					<img className="rounded-lg h-16" src={ju1} alt="Mision E" />
				</center>
				<p
					className="text-sm text-center mt-1 font-bold"
					style={{ color: '#FF3908' }}
				>
					Alcaldía Municipal de la Tebaida Quindío
				</p>
			</div>
			<p className="text-justify text-sm mx-0 mt-4">
				En la Alcaldía municipal se realizan varios trámites referentes con las
				empresas nacientes o las ya consolidadas, entre ellos:
			</p>
			<p className="text-justify text-sm mx-0 mt-4">
				<strong>
					• Registro de contribuyentes del impuesto de industria y comercio.{' '}
				</strong>{' '}
				Para empresas nacientes, luego anualmente se debe pagar el impuesto.
			</p>
			<p className="text-justify text-sm mx-0 mt-4">
				<strong>• Curso de manipulación higiénica de alimentos. </strong>
				Para el sector gastronómico
			</p>
			<p className="text-justify text-sm mx-0 mt-4">
				<strong>
					• Exención del impuesto de industria y comercio. Para empresas del
					municipio.{' '}
				</strong>
			</p>

			<div className="grid grid-cols-1">
				<div className=" mt-12">
					<center>
						<img className="rounded-lg w-8/12" src={alcal1} alt="Mision E" />
					</center>
				</div>
			</div>
			<div
				className="p-3 text-sm text-gray-700 mt-12"
				style={{ border: 'solid', borderColor: '#FF3908', borderWidth: '1px' }}
			>
				<div className="flex flex-row">
					<strong>Informes: </strong>
					<p className="ml-2">Alcaldía de la Tebaida</p>
				</div>

				<div className="flex flex-row">
					<strong>Email: </strong>
					<p className="ml-2 text-blue-500">
						{' '}
						contactenos@latebaida-quindio.gov.co
					</p>
				</div>
				<div className="flex flex-row">
					<strong>Web: </strong>
					<a
						href=":http://www.latebaida-quindio.gov.co/tema/tramites-y-servicios"
						target="__blank"
					>
						<p className="ml-2 underline text-blue-500">
							:http://www.latebaida-quindio.gov.co/tema/tramites-y-servicios
						</p>
					</a>
				</div>
				<div className="flex flex-row">
					<strong>Conmutador: </strong>
					<p className="ml-2"> (57) (6) 7542950</p>
				</div>
			</div>
			<BottomNavigationFront />
		</div>
	);
};

export default Alcaldia;
