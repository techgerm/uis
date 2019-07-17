import React from "react";
/* TODO: Future enhancement for pricing model */
// import { Link } from "react-router-dom";

interface ItemState {
	itemTitle: string;
	itemIcon: string;
}

export class Item extends React.Component<any, ItemState> {
	render() {
		return (
			<div className="item">
				<div className="single-services">
					<div className="icon">
						<i className={this.props.itemIcon} />
					</div>
					<h3>{this.props.itemTitle}</h3>
					{/* TODO: Future enhancement for pricing model */}
					{/* <i className="flaticon-right link-btn" /> */}
					{/* <Link to="#" className="link uk-position-cover" /> */}
				</div>
			</div>
		);
	}
}
