import React from "react";
import { Layout, Typography, Row, Col, Button } from "antd";

const { Header } = Layout;
const { Title } = Typography;

export const AppHeader = () => {
    return (
        <div className="app-header">
            <Header>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Title>Submarine stacks</Title>
                    </Col>
                    <Col>
                        <div>
                            <Button>menu</Button>
                        </div>
                    </Col>
                </Row>
            </Header>
        </div>
    );
};
