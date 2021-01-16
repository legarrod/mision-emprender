import React from 'react';
import BottomNavigationFront from '../components/BottomNavigation/BottomNavigationFront';
import ini1 from '../assets/img/in1.png';
import ini2 from '../assets/img/ini2.png';
import ini3 from '../assets/img/ini3.png';
import ini4 from '../assets/img/ini4.png';
import ini5 from '../assets/img/ini5.png';
import { Link } from 'react-router-dom';

const Inicia = () => {
	return (
		<div className="flex flex-col content-between mx-5">
			<p
				className="text-xl text-center mt-4 mb-8 font-bold"
				style={{ color: '#FF3908' }}
			>
				EMPRENDEDORES QUE INICIAN
			</p>
			<p className="text-justify text-sm mx-0 mt-0 mb-1">
				Es importante que conozcas{' '}
				<strong className="text-green-600">más EMPRENDIMIENTO</strong> creativo
				y la innovación.
			</p>
			<p className="text-justify text-sm mx-0 mt-0">
				El <strong>emprendimiento</strong> es un camino que una persona o grupo
				de personas decide iniciar porque tienen una idea de negocio o de crear
				una empresa, con el fin de mejorar su nivel de vida, desarrollar los
				talentos y aportarle a la sociedad. La creatividad es hacer las cosas de
				manera diferente, logrando llegar más fácil a los usuarios y clientes y
				obteniendo unos resultados adecuados, así se convierte en un
				emprendimiento innovador. <strong>Clic en los logos</strong>
			</p>
			<div className="grid grid-cols-2">
				<Link to="jueves">
					<div className="w-32 mt-3">
						<center>
							<img className="rounded-lg shadow-lg" src={ini1} alt="Mision E" />
						</center>
						<p className="text-xs text-center text-black mb-5">
							Aprende de los expertos
						</p>
					</div>
				</Link>
				<div className="w-32 mt-3">
					<center>
						<img className="rounded-lg shadow-lg" src={ini2} alt="Mision E" />
					</center>
				</div>
				<div className="w-32 mt-3">
					<center>
						<img className="rounded-lg shadow-lg" src={ini3} alt="Mision E" />
					</center>
					<p className="text-xs text-center text-black mb-5">
						Fortalece el emprendimiento
					</p>
				</div>
				<div className="w-32 mt-3">
					<center>
						<img
							className="rounded-lg shadow-lg h-16"
							src={ini4}
							alt="Mision E"
						/>
					</center>
					<p className="text-xs text-center text-black mb-5 ">
						Emprendimiento para jóvenes caficultores
					</p>
				</div>
				<div className="w-32 mt-3">
					<center>
						<img className="rounded-lg shadow-lg" src={ini5} alt="Mision E" />
					</center>
					<p className="text-xs text-center text-black mb-5">
						Mujeres competencias TIC
					</p>
				</div>
			</div>
			<BottomNavigationFront next={'negocios'} back={'form'} />
		</div>
	);
};

export default Inicia;
