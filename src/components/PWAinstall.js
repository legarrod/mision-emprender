import React, { useEffect, useState } from 'react';

const InstallPWA = () => {
	const name = 'Mision E';
	const [supportsPWA, setSupportsPWA] = useState(false);
	const [promptInstall, setPromptInstall] = useState(null);

	useEffect(() => {
		const handler = (e) => {
			e.preventDefault();
			setSupportsPWA(true);
			setPromptInstall(e);
		};
		window.addEventListener('beforeinstallprompt', handler);

		return () => window.removeEventListener('transitionend', handler);
	}, []);

	const onClick = (evt) => {
		evt.preventDefault();
		if (!promptInstall) {
			return;
		}
		promptInstall.prompt();
	};
	if (!supportsPWA) {
		return null;
	}
	return (
		<div
			class="p-2 mb-5 bg-orange-500 hover:bg-orange-700 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex"
			role="alert"
		>
			<span class="flex rounded-full bg-orange-600 uppercase px-2 py-1 text-xs font-bold mr-3">
				APP
			</span>
			<button
				className="link-button hidden md:flex font-semibold mr-2 text-left flex-auto"
				id="setup_button"
				aria-label="Install app"
				title="Install app"
				onClick={onClick}
			>
				Para ingresar cada que lo necesites instala esta aplicación en tu
				dispositivo dando clic acá
			</button>
			<button
				className="link-button md:hidden font-semibold mr-2 text-left flex-auto"
				id="setup_button"
				aria-label="Install app"
				title="Install app"
				onClick={onClick}
			>
				Instalar {name || 'este sitio '} en tu celular
			</button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="ml-3 text-white fill-current"
				viewBox="0 0 24 24"
				width="24"
				height="24"
			>
				<path
					class="heroicon-ui"
					d="M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z"
				/>
			</svg>
		</div>
	);
};

export default InstallPWA;
