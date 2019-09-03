import React, { Component } from "react";
import * as firebase from "firebase/app";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigation } from "./navigation/NavBar";
import { Preloader } from "./components/common/Preloader";
import { Home } from "./pages/Home";
import { firebaseConfig } from "./config";
// import ServiceDetails from './components/Pages/ServiceDetails';
// import ProjectDetails from './components/Pages/ProjectDetails';
// import BlogDetails from './components/Pages/BlogDetails';
// import Blog from './components/Pages/Blog';

export class App extends Component {
	state = {
		loading: true
	};

	componentDidMount() {
		this.initializeAsyncCall().then(() => {
			this.setState({ loading: false });
		});
	}

	initializeAsyncCall = () => {
		return new Promise(resolve => {
			firebase.initializeApp(firebaseConfig);

			// additional wait for aesthetic purposes
			setTimeout(() => resolve(), 1000);
		});
	};

	renderNavBar = () => {
		return <Navigation />;
	};

	render() {
		return (
			<Router>
				<React.Fragment>
					{this.state.loading ? <Preloader /> : ""}
					{this.renderNavBar()}
					<Route path="/" exact component={Home} />
					{/* <Route path="/service-details" exact component={ServiceDetails} />
                    <Route path="/project-details" exact component={ProjectDetails} />
                    <Route path="/blog-details" exact component={BlogDetails} />
                    <Route path="/blog" exact component={Blog} /> */}
				</React.Fragment>
			</Router>
		);
	}
}
