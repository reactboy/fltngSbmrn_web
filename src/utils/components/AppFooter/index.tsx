import React from "react";
import { Layout, Col, Row, Typography } from "antd";

const { Title, Text } = Typography;
const { Footer } = Layout;

export const AppFooter = () => {
    return (
        <div className="app-footer">
            <Footer>
                <Row justify="center">
                    <Col>
                        <Title level={2}>Submarine stacks</Title>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col>
                        <Text>プライバシーポリシー</Text>
                    </Col>
                    <Col>
                        <Text>利用規約</Text>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col>
                        {/* TODO ReactBoyyyのリンクを追加する */}
                        <Text>Made with ❤ by ReactBoyyy</Text>
                    </Col>
                </Row>
            </Footer>
        </div>
    );
};
