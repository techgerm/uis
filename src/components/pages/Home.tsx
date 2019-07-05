import React from "react";
import Banner from "../sections/Banner";
import Features from "../sections/Features";
import { SeparatedBar } from "../common/SeparatedBar";
import About from "../sections/About";
import Services from "../sections/Services";
import Project from "../sections/Project";
import Testimonials from "../sections/Testimonials";
import PartnerLogo from "../sections/PartnerLogo";
import Team from "../sections/Team";
import Newsletter from "../sections/Newsletter";
import LatestNews from "../sections/LatestNews";
import { Contact } from "../sections/Contact";
import { Footer } from "../common/Footer";

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				{/* Main Banner */}
				<Banner />
				{/* Features Area */}
				<Features />
				{/* Vertical line */}
				<SeparatedBar />
				{/* About Area */}
				<About />
				{/* Vertical line */}
				<SeparatedBar />
				{/* Services Area */}
				<Services />
				{/* Vertical line */}
				<SeparatedBar />
				{/* Project Area */}
				<Project />
				{/* Vertical line */}
				<SeparatedBar />
				{/* Feedback Area */}
				<Testimonials />
				{/* Partner Area */}
				<PartnerLogo />
				{/* Team Area */}
				<Team />
				{/* Subscribe Area */}
				<Newsletter />
				{/* Blog Area */}
				<LatestNews />
				{/* Vertical line */}
				<SeparatedBar />
				{/* Contact Area */}
				<Contact />
				{/* Footer Area */}
				<Footer />
			</React.Fragment>
		);
	}
}

export default Home;
