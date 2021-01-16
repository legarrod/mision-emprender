import React, { useState } from 'react';
import BottomNavigationFront from '../components/BottomNavigation/BottomNavigationFront';
import { Link } from 'react-router-dom';

const Form = () => {
	const [name, setName] = useState();

	const handlerSetname = (e) => {
		sessionStorage.setItem('nombredeusuario', name);
	};

	return (
		<div className="flex flex-col content-between mx-5">
			<p
				className="text-3xl text-center mt-1 font-bold"
				style={{ color: '#FF3908' }}
			>
				Eres muy importante
			</p>
			<p className="text-justify text-sm font-bold mx-5 mt-0">
				Aquí te ayudamos de forma personalizada, así que requerimos conocer tus
				datos básicos y los de tu emprendimiento o empresa.
			</p>
			<div className="m-4">
				<input
					className="border border-black w-full pl-2"
					placeholder="Nombre completo"
					onChange={(e) => setName(e.target.value)}
				/>

				<select
					className="border border-black w-full pl-2"
					name="cars"
					id="cars"
				>
					<option value="Documento de identidad">Tipo de Documento</option>
					<option value="Cedula de ciudadanía">Cedula de ciudadanía</option>
					<option value="Cedula de extranjería">Cedula de extranjería</option>
					<option value="Tarjeta de identidad">Tarjeta de identidad</option>
				</select>
				<input
					className="border border-black w-full pl-2"
					placeholder="Numero de documento"
				/>
				<input
					className="border border-black w-full pl-2"
					placeholder="Teléfono de contacto"
				/>
				<div className="w-full">
					<input
						className="border border-black w-2/4 pl-2"
						placeholder="Edad"
					/>
					<select
						className="border border-black w-2/4 pl-2"
						name="cars"
						id="cars"
					>
						<option value="Sexo">Sexo</option>
						<option value="Masculino">Masculino</option>
						<option value="Femenino">Femenino</option>
						<option value=">Otro">Otro</option>
					</select>
				</div>
				<select
					className="border border-black w-full pl-2"
					name="cars"
					id="cars"
				>
					<option value="Nivel de educación">Nivel de educación</option>
					<option value="Primaria">Primaria</option>
					<option value="Bachiller">Bachiller</option>
					<option value="Técnico/Tecnólogo">Técnico/Tecnólogo</option>
					<option value="Profesional">Profesional</option>
					<option value="Posgrado">Posgrado</option>
				</select>

				<input
					className="border border-black w-full pl-2"
					placeholder="Nombre del emprendimiento"
				/>
				<select
					className="border border-black w-full pl-2"
					name="cars"
					id="cars"
				>
					<option value="Tipo de emprendimiento">
						Sector del emprendimiento
					</option>
					<option value="Tecnología y economía Naranja">
						Tecnología y economía Naranja
					</option>
					<option value="Turismo">Turismo</option>
					<option value="Gastronomía">Gastronomía</option>
					<option value="Comercialización de productos">
						Comercialización de productos
					</option>
					<option value="Servicios profesionales y asesorías">
						Servicios profesionales y asesorías
					</option>
					<option value="Transporte">Transporte</option>
					<option value="Mensajería">Mensajería</option>
					<option value="Producción de bienes">Producción de bienes</option>
					<option value="Agroindustria">Agroindustria</option>
					<option value="Agrícola">Agrícola</option>
				</select>
				<input
					className="border border-black w-full pl-2"
					placeholder="Tiempo del emprendimiento"
				/>
				<input
					className="border border-black w-full pl-2"
					placeholder="Lugar del emprendimiento"
				/>

				<input
					className="border border-black w-full pl-2"
					placeholder="¿Que diferencia tu emprendimiento?"
				/>
				<input
					className="border border-black w-full pl-2"
					placeholder="Describa los productos o servicios"
				/>
				<input
					className="border border-black w-full pl-2"
					placeholder="Número personas del emprendimiento"
				/>
				<input
					className="border border-black w-full pl-2"
					placeholder="¿Tienes plan de negocios?"
				/>
				<input
					className="border border-black w-full pl-2"
					placeholder="¿Requieres capital?"
				/>
				<input
					className="border border-black w-full pl-2"
					placeholder="¿Cumples con los compromisos legales?"
				/>
				<input
					className="border border-black w-full pl-2"
					placeholder="¿Utilizas medios digitles para el mercadeo?"
				/>
			</div>
			<Link to="recomendamos">
				<center>
					<button
						onClick={handlerSetname}
						className="w-32 bg-blue-600 rounded-lg text-white font-semibold p-1"
					>
						Clic aquí para el diagnostico
					</button>
				</center>
			</Link>
			<BottomNavigationFront next={'inicia'} back={'menu'} />
		</div>
	);
};

export default Form;
