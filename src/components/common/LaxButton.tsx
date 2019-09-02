import React from "react";
import ReactDOM from "react-dom";
import lax from "lax.js";

type Direction = "Right" | "Left";

interface LaxProps {
	text: string;
	link: string;
	driftDirection: Direction;
	style: React.CSSProperties;
}

export class LaxButton extends React.Component<LaxProps> {
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
			<a
				href={this.props.link}
				className="uk-button uk-button-default lax"
				data-lax-preset={`drift${this.props.driftDirection}`}
				style={this.props.style}
			>
				{this.props.text}
			</a>
		);
	}
}
