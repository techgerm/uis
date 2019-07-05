import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./navigation/NavBar";
import { Preloader } from "./components/common/Preloader";
import Home from "./pages/Home";
// import ServiceDetails from './components/Pages/ServiceDetails';
// import ProjectDetails from './components/Pages/ProjectDetails';
// import BlogDetails from './components/Pages/BlogDetails';
// import Blog from './components/Pages/Blog';

class App extends React.Component {
	state = {
		loading: true
	};

	componentDidMount() {
		this.demoAsyncCall().then(() => this.setState({ loading: false }));
	}

	demoAsyncCall = () => {
		return new Promise(resolve => setTimeout(() => resolve(), 2000));
	};

	renderNavBar = () => {
		return <NavBar />;
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
