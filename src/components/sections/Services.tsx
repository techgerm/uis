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
						<Item title="Public Notary" iconName="flaticon-quality" />
						<Item title="Live Scan" iconName="flaticon-ux-design" />
						<Item title="Document Translations" iconName="flaticon-chat" />
						<Item title="Affidavits" iconName="flaticon-search-engine" />
						<Item title="Business Contracts" iconName="flaticon-link" />
						<Item title="Apostilles" iconName="flaticon-tick" />
						<Item title="Power of Attorney" iconName="flaticon-think" />
						<Item title="Wills and Living Trusts" iconName="flaticon-edit" />
						<Item
							title="Colombian Legal Services"
							iconName="flaticon-translation"
						/>
					</div>
				</div>
			</section>
		);
	}
}
