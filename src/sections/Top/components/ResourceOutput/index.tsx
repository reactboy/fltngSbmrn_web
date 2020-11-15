import React from "react";
import { Typography, Row, Col } from "antd";

const { Title, Paragraph } = Typography;

export const ResourceOutput = () => {
    return (
        <div className="output-section">
            <div>
                <Row>
                    <Col>
                        <Title level={2}>アウトプット</Title>
                        <Paragraph>
                            アウトプットとはインプットした知識を使用して何かしらを生み出す作業です。
                        </Paragraph>
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col>
                        <Title level={3}>アウトプットの手段</Title>
                        <Paragraph>
                            アウトプットの方法に特に決まったものは無いです。
                        </Paragraph>
                        <Paragraph>
                            新しく知った知識を使用して実際に何か生み出すことができていればアウトプットになると思います。
                        </Paragraph>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
