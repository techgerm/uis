import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigation } from "./navigation/NavBar";
import { Preloader } from "./components/common/Preloader";
import { Home } from "./pages/Home";
import * as firebase from "firebase/app";
// import ServiceDetails from './components/Pages/ServiceDetails';
// import ProjectDetails from './components/Pages/ProjectDetails';
// import BlogDetails from './components/Pages/BlogDetails';
// import Blog from './components/Pages/Blog';

class App extends React.Component {
	state = {
		loading: true,
		firebaseConfig: {
			apiKey: "AIzaSyBx4b4HcAgUHDHLZ1pw9VD_Fh-Kv17c0hU",
			authDomain: "uis-llc.firebaseapp.com",
			databaseURL: "https://uis-llc.firebaseio.com",
			projectId: "uis-llc",
			storageBucket: "uis-llc.appspot.com",
			messagingSenderId: "514499994875",
			appId: "1:514499994875:web:1d34d97fc40fe297"
		}
	};

	componentDidMount() {
		this.demoAsyncCall().then(() => {
			// TODO: initialize firebase
			firebase.initializeApp(this.state.firebaseConfig);
			this.setState({ loading: false });
		});
	}

	demoAsyncCall = () => {
		return new Promise(resolve => setTimeout(() => resolve(), 2000));
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

export default App;
