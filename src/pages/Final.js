import React from 'react';
import BottomNavigationFront from '../components/BottomNavigation/BottomNavigationFront';
import fi1 from '../assets/img/fi4.png';
import fi2 from '../assets/img/catalisadores.png';
import fi3 from '../assets/img/le4.png';
import fi4 from '../assets/img/latebaidadiferente.png';
import fi5 from '../assets/img/direcciomntic.png';
import wp from '../assets/img/wp.png';

const Final = () => {
	return (
		<div className="mx-5 mt-5">
			<p
				className="text-3xl text-center mt-1 font-bold"
				style={{ color: '#FF3908' }}
			>
				INFORMACIÓN DE LA APLICACIÓN
			</p>
			<p className="text-justify text-sm mx-0 mt-0 mb-1">
				Esta aplicación fue desarrollada en el marco del programa Catalizadores
				de la Innovación del Ministerio de las TIC, versión 8-2020. Proyecto
				formulado por la Alcaldía del municipio de la Tebaida Quindío, Dirección
				Administrativa Tic por los ingenieros Yhonathan Cardona Y Milthon Torres
				C, programador Luis García
			</p>
			<p className="text-justify text-sm mx-0 mt-0 mb-1">
				La aplicación es una versión de prueba V.01.00 y fue desarrollada en
				REACT JS y NEXT JS, con tecnología PWA Progressive Web App
			</p>
			<p className="text-center font-bold text-sm mx-5 mt-5 mb-1">
				Todos los derechos son propiedad de La Alcaldía de La Tebaida Quindío.
			</p>
			<div className="flex flex-row">
				<p className="text-center text-xs mx-5 mt-5 mb-1">
					http://www.latebaida-quindio.gov.co/ Email:
					secop@latebaida.quindio.gov.co
				</p>
				<img className="rounded-lg h-10 mt-3" src={wp} alt="Mision E" />
			</div>
			<div className=" mt-5  grid grid-cols-2">
				<a
					href="https://mincultura.gov.co/Paginas/Inicio.aspx"
					target="__blank"
				>
					<center>
						<img
							className="rounded-lg ml-5 shadow-lg h-8"
							src={fi1}
							alt="Mision E"
						/>
					</center>
				</a>
				<a
					href="https://www.catalizadores.gov.co/655/w3-channel.html"
					target="__blank"
				>
					<center>
						<img
							className="rounded-lg ml-5 shadow-lg h-8"
							src={fi2}
							alt="Mision E"
						/>
					</center>
				</a>
			</div>
			<div className="grid grid-cols-3 mt-5 mb-8">
				<a href="http://www.latebaida-quindio.gov.co/" target="__blank">
					<center>
						<img
							className="rounded-lg ml-5 shadow-lg mt-3 h-16"
							src={fi3}
							alt="Mision E"
						/>
					</center>
				</a>
				<a
					href="https://www.facebook.com/EsLaTebaidaDiferente/"
					target="__blank"
				>
					<center>
						<img
							className="rounded-lg ml-5 shadow-lg mt-3 h-16"
							src={fi4}
							alt="Mision E"
						/>
					</center>
				</a>
				<a href="https://www.mintic.gov.co/portal/inicio/" target="__blank">
					<center>
						<img
							className="rounded-lg ml-5 shadow-lg mt-3 h-16"
							src={fi5}
							alt="Mision E"
						/>
					</center>
				</a>
			</div>

			<BottomNavigationFront next={'menu'} back={'expertos'} />
		</div>
	);
};

export default Final;
