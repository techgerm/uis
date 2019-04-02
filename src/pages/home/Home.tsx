import { Row, Col, Button, Layout } from "antd";
import React, { Component } from "react";

const { Header, Content, Footer } = Layout;

interface IHomeProps {
    temp: string;
    temp1: string;
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
            <div>
                <Layout style={{textAlign: 'center'}}>
                    {/* <Header style={{color: 'white'}}>United International Services LLC</Header> */}
                    <Content>
                            <Row>
                                <Col span={8}>
                                    <Button type="primary">TEMP</Button>
                                </Col>
                                <Col span={8}>
                                    <h1>United International Services LLC</h1>
                                    <p>Website is currently under construction</p>
                                    <p>Please contact us directly at 661-993-7968</p>
                                </Col>
                                <Col span={8}>
                                    <Button type="primary">TEMP</Button>
                                </Col>
                            </Row>
                    </Content>
                </Layout>
            </div>
        );
    }
}
