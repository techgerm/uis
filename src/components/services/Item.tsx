import React from "react";
/* TODO: Future enhancement for pricing model */
// import { Link } from "react-router-dom";

interface ItemProps {
	title: string;
	iconName: string;
}

export const Item: React.FC<ItemProps> = ({ ...props }) => (
	<div className="item">
		<div className="single-services">
			<div className="icon">
				<i className={props.iconName} />
			</div>
			<h3>{props.title}</h3>
			{/* TODO: Future enhancement for pricing model */}
			{/* <i className="flaticon-right link-btn" /> */}
			{/* <Link to="#" className="link uk-position-cover" /> */}
		</div>
	</div>
);
