import React from "react";
import ReactDOM from "react-dom";
import lax from "lax.js";
import { Link } from "react-router-dom";

export class LaxButton extends React.Component {
	el: Element | Text | null | undefined;

	componentDidMount() {
		this.el = ReactDOM.findDOMNode(this);
		lax.addElement(this.el);
	}

	componentWillUnmount() {
		lax.removeElement(this.el);
	}

	render() {
		return (
			<Link
				to="#"
				className="uk-button uk-button-default lax"
				data-lax-preset="driftLeft"
			>
				More About Us <i className="flaticon-right" />
			</Link>
		);
	}
}
