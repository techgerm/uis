import React from "react";
import { Banner } from "../components/sections/Banner";
import { Features } from "../components/sections/Features";
import { SeparatedBar } from "../components/common/SeparatedBar";
import { About } from "../components/sections/About";
import { Services } from "../components/sections/Services";
import { Testimonials } from "../components/sections/Testimonials";
import { PartnerLogo } from "../components/sections/PartnerLogo";
import { Newsletter } from "../components/sections/Newsletter";
import { LatestNews } from "../components/sections/LatestNews";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/common/Footer";

export class Home extends React.Component {
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
				{/* Feedback Area */}
				<Testimonials />
				{/* Partner Area */}
				<PartnerLogo />
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
