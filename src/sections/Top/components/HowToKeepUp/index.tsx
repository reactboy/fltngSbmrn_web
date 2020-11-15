import React from "react";
import { Typography, Row, Col } from "antd";

const { Title, Paragraph } = Typography;

export const HowToKeepUp = () => {
    return (
        <div className="how-to-keep-section">
            <Row>
                <Col>
                    <Title level={2}>キャッチアップ・キープアップの方法</Title>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Paragraph>
                        新しい技術をキャッチアップ・キープアップするためにはインプットとアウトプットをひたすら繰り返すことが必要です。
                    </Paragraph>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Paragraph>
                        使いこなすレベルまで身につけるにはインプットとアウトプットをひたすら繰り返す以外に近道はないんじゃないかなと思います。
                    </Paragraph>
                </Col>
            </Row>
        </div>
    );
};
