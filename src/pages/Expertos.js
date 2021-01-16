import React from 'react';
import BottomNavigationFront from '../components/BottomNavigation/BottomNavigationFront';
import { Link } from 'react-router-dom';

import emp1 from '../assets/img/emp1.png';
import emp2 from '../assets/img/emp2.jpg';
import emp3 from '../assets/img/emp3.jpg';
import emp4 from '../assets/img/emp4.jpg';

const Expertos = () => {
	return (
		<div className="mx-5">
			<p
				className="text-xl text-center mt-4 mb-8 font-bold"
				style={{ color: '#FF3908' }}
			>
				LOS EMPRESARIOS DE LA TEBAIDA TE QUIEREN AYUDAR
			</p>
			<p className="text-justify text-sm mx-0 mt-0 mb-1">
				Muchas personas ya han vivido la experiencia de emprender, con muy
				buenos resultados. En La Tebaida muchos de ellos quieren compartir su
				experiencia y apoyarte para que logres los objetivos de tu
				emprendimiento. Contáctalos
			</p>
			<Link to="ingeniero">
				<div className=" mt-12 grid w-11/12 grid-cols-2">
					<center>
						<img
							className="rounded-lg shadow-lg h-16"
							src={emp1}
							alt="Mision E"
						/>
					</center>
					<p className="text-xs text-justify">
						Alejandro, empresario joven de la Tebaida,
					</p>
				</div>
			</Link>
			<div className=" mt-12 grid w-11/12 grid-cols-2">
				<center>
					<img
						className="rounded-lg shadow-lg h-16"
						src={emp2}
						alt="Mision E"
					/>
				</center>
				<p className="text-xs text-justify">
					El club del emprendedor Tebaida es un programa quincenal por el
					Facebook
				</p>
			</div>
			<div className=" mt-12 grid w-11/12 grid-cols-2">
				<center>
					<img
						className="rounded-lg shadow-lg h-16"
						src={emp3}
						alt="Mision E"
					/>
				</center>
				<p className="text-xs text-justify">
					Don Álvaro y Doña Amanda, propietarios de la empresa Berhlan de
					Colombia S.A
				</p>
			</div>
			<div className=" mt-12 grid w-11/12 grid-cols-2">
				<center>
					<img
						className="rounded-lg shadow-lg h-16"
						src={emp4}
						alt="Mision E"
					/>
				</center>
				<p className="text-xs text-justify">
					Felipe, gerente del Hotel Mirador de las Palmas, reconocidos a nivel
					internacional, en La Tebaida Quindío
				</p>
			</div>
			<BottomNavigationFront next={'final'} back={'fortalecimiento'} />
		</div>
	);
};

export default Expertos;
