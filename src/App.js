import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Home';
import Inicial from './pages/Inicial';
import Menu from './pages/Menu';
import Form from './pages/Form';
import Inicia from './pages/Inicia';
import Negocios from './pages/Negocios';
import Legalidad from './pages/Legalidad';
import Financiacion from './pages/Financiacion';
import Fortalecimiento from './pages/Fortalecimiento';
import Expertos from './pages/Expertos.js';
import Jueves from './pages/Jueves';
import AppsCo from './pages/AppsCo';
import Recomendamos from './pages/Recomendamos';
import Alcaldia from './pages/alcaldia';
import Emprender from './pages/Emprender';
import Ingeniero from './pages/Ingeniero';
import Camara from './pages/Camara';
import Final from './pages/Final';
import PWAinstall from '../src/components/PWAinstall';

function App() {
	return (
		<Router>
			<Switch>
				<Route
					render={({ location }) => (
						<TransitionGroup className="container sm:hidden">
							<CSSTransition
								appear={true}
								key={location.key}
								timeout={{ enter: 400, exit: 200 }}
								classNames="fade"
							>
								<div className="inner ">
									<PWAinstall />
									<Switch key={location.key} location={location}>
										<Route exact path="/" component={Home} />
										<Route exact path="/init" component={Inicial} />
										<Route exact path="/menu" component={Menu} />
										<Route exact path="/form" component={Form} />
										<Route exact path="/inicia" component={Inicia} />
										<Route exact path="/negocios" component={Negocios} />
										<Route exact path="/legalidad" component={Legalidad} />
										<Route exact path="/emprender" component={Emprender} />
										<Route exact path="/ingeniero" component={Ingeniero} />
										<Route exact path="/camara" component={Camara} />
										<Route exact path="/final" component={Final} />
										<Route
											exact
											path="/fortalecimiento"
											component={Fortalecimiento}
										/>
										<Route
											exact
											path="/financiacion"
											component={Financiacion}
										/>
										<Route exact path="/expertos" component={Expertos} />
										<Route exact path="/jueves" component={Jueves} />
										<Route exact path="/apps" component={AppsCo} />
										<Route exact path="/alcaldia" component={Alcaldia} />
										<Route
											exact
											path="/recomendamos"
											component={Recomendamos}
										/>
									</Switch>
								</div>
							</CSSTransition>
						</TransitionGroup>
					)}
				/>
			</Switch>
		</Router>
	);
}

export default App;
