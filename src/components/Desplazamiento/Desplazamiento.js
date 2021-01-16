import React from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

const Desplazamiento = () => {
	return (
		<div>
			<div className="absolute h-screen left-0 ">
				<GrPrevious
					className="absolute bottom-0 left-0 ml-5"
					style={{ fontSize: '40px', color: '#FF3908' }}
				/>
			</div>
			<div className="absolute  h-screen right-0">
				<GrNext
					className="absolute bottom-0 right-0 mr-5"
					style={{ fontSize: '40px', color: '#FF3908' }}
				/>
			</div>
		</div>
	);
};

export default Desplazamiento;
