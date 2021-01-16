import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RiWheelchairFill } from 'react-icons/ri';
import controlsimg from '../../assets/img/audio controls.png';
import { GrNext, GrPrevious } from 'react-icons/gr';

export default function BottomNavigationFront({ back, next }) {
	const [controls, setControls] = useState(false);
	const handlerView = () => {
		setControls(!controls);
	};

	return (
		<div
			className="absolute left-0 right-0 flex flex-row justify-between  mx-1 mt-8 pt-0"
			style={{ bottom: '0px', top: '90vh' }}
		>
			{window.location.pathname === '/jueves' ||
			window.location.pathname === '/apps' ||
			window.location.pathname === '/alcaldia' ||
			window.location.pathname === '/emprender' ||
			window.location.pathname === '/recomendamos' ||
			window.location.pathname === '/camara' ||
			window.location.pathname === '/ingeniero' ? (
				<div className=" left-0 z-10">
					<Link to="menu"></Link>
				</div>
			) : (
				<div className=" left-0 z-10">
					<Link to={back}>
						<GrPrevious
							className=" ml-0"
							style={{ fontSize: '40px', color: '#FF3908' }}
						/>
					</Link>
				</div>
			)}

			<div className="flex flex-row ">
				<div>
					<Link to="menu">
						<p
							className=" text-5xl"
							style={{ color: '#FF3908', top: '100vh', zIndex: '100' }}
						>
							<FaHome />
						</p>
					</Link>
				</div>
				<div className="flex flex-row-reverse right-0 mb-0">
					{controls && (
						<img
							className="h-6"
							alt="Mision emprender"
							src={controlsimg}
							style={{ zIndex: '200' }}
						/>
					)}
					<RiWheelchairFill
						className=" text-5xl  mr-3"
						onClick={handlerView}
						style={{ color: '#FF3908', top: '100vh', zIndex: '100' }}
					/>
				</div>
			</div>
			{window.location.pathname === '/jueves' ||
			window.location.pathname === '/apps' ||
			window.location.pathname === '/alcaldia' ||
			window.location.pathname === '/emprender' ||
			window.location.pathname === '/recomendamos' ||
			window.location.pathname === '/camara' ||
			window.location.pathname === '/ingeniero' ? (
				<div className=" right-0 z-10">
					<Link to="menu"> </Link>
				</div>
			) : (
				<div className=" right-0 z-10">
					<Link to={next}>
						{' '}
						<GrNext
							className="mr-0"
							style={{ fontSize: '40px', color: '#FF3908' }}
						/>
					</Link>
				</div>
			)}
		</div>
	);
}
