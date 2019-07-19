import React, { Component } from "react";
import { Item } from "../services/Item";

export class Services extends Component {
	render() {
		return (
			<section id="services" className="services-area  uk-services uk-section">
				<div className="uk-container">
					<div className="uk-section-title section-title">
						<span>What We Do</span>
						<h2>Our Services</h2>
						<div className="bar" />
					</div>
					<div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
						<Item title="Affidavits" iconName="flaticon-plan" />
						<Item title="Business Contracts" iconName="flaticon-think" />
						<Item title="Power of Attorney" iconName="flaticon-shout" />
						<Item title="Apostilles" iconName="flaticon-analytics-1" />
						<Item title="Live Scan" iconName="flaticon-ux-design" />
						<Item title="Document Translations" iconName="flaticon-camera" />
						<Item title="Wills and Living Trusts" iconName="flaticon-project" />
						<Item title="Colombia Legal" iconName="flaticon-chat" />
					</div>
				</div>
			</section>
		);
	}
}
