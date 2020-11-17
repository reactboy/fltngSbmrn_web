import React from "react";
import { Typography, Row, Col, Button } from "antd";

const { Title, Paragraph } = Typography;

export const RssIntroduction = () => {
    return (
        <div className="rss-introduction-section">
            <div>
                <Row>
                    <Col>
                        <Title level={2}>Submarine stacks</Title>
                        <Paragraph>
                            Submarine
                            stacksは購読しているRSSのNowな情報しか見せないRSSリーダーです。
                        </Paragraph>
                        <Paragraph>
                            インプットの作業をお手伝いするツールです。
                        </Paragraph>
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col>
                        <Button className="primary" disabled>
                            Submarine stacksで自分だけのリソース集を作る
                        </Button>
                        <Paragraph>※準備中</Paragraph>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
