import React from "react";
import { Item } from "../services/ItemTemp";

export class Services extends React.Component {
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
						<Item itemTitle="Affidavits" itemIcon="flaticon-plan"></Item>
						<Item
							itemTitle="Business Contracts"
							itemIcon="flaticon-think"
						></Item>
						<Item
							itemTitle="Power of Attorney"
							itemIcon="flaticon-shout"
						></Item>
						<Item
							itemTitle="Apostille Services"
							itemIcon="flaticon-analytics-1"
						></Item>
						<Item itemTitle="Live Scan" itemIcon="flaticon-ux-design"></Item>
						<Item
							itemTitle="Document Translation"
							itemIcon="flaticon-camera"
						></Item>
						<Item
							itemTitle="Wills and Living Trusts"
							itemIcon="flaticon-project"
						></Item>
						<Item
							itemTitle="Documentos y Trãmites Legales en Colombia"
							itemIcon="flaticon-chat"
						></Item>
					</div>
				</div>
			</section>
		);
	}
}
