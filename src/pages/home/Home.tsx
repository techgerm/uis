import { Button } from "antd";
import React, { Component } from "react";

interface IHomeProps {
    temp: string;
}

interface IHomeState {
    temp2: string;
}

export default class Home extends Component<IHomeProps, IHomeState> {

    constructor(props: IHomeProps) {
        super(props);
    }

    public render() {
        return (
            <Button type="primary"/>
        );
    }
}
