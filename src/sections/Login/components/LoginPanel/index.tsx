import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

export const LoginPanel = () => {
    //MEMO for development purpose only
    const history = useHistory();
    const onClickLogin = () => {
        history.push("/feeds");
    };

    return (
        <Row align="middle" justify="center" className="login-panel">
            <Col className="login-panel__content">
                <Title>Login to Submarine stacks</Title>
                <Paragraph>
                    Googleでログインして、自分だけのFeedを作ろう🚀
                </Paragraph>
                <div className="login-panel__buttons">
                    <Button className="tertiary" onClick={onClickLogin}>
                        Googleでログイン
                    </Button>
                    <Button className="primary-outline" onClick={onClickLogin}>
                        ログインしないで始める
                    </Button>
                </div>
                <Paragraph>
                    ※ボタンを押すとGoogleのページにリダイレクトされます
                </Paragraph>
            </Col>
        </Row>
    );
};
