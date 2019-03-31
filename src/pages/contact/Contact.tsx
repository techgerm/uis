import { Button } from "antd";
import React, { Component } from "react";

interface IContactProps {
    temp: string;
}

interface IContactState {
    temp2: string;
}

export default class Contact extends Component<IContactProps, IContactState> {

    constructor(props: IContactProps) {
        super(props);
    }

    public render() {
        return (
            <Button type="primary"/>
        );
    }
}
