import React, { useEffect, useState, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Typography, Layout, Row, Col, Button } from "antd";

const { Title } = Typography;
const { Header: AntdHeader } = Layout;

export const Header = () => {
    const [isHide, setIsHide] = useState<Boolean>(false);
    const currentScroll = useRef<number>(0);
    const history = useHistory();

    useEffect(() => {
        window.document.addEventListener("scroll", onScroll);
        return () => {
            window.document.removeEventListener("scroll", onScroll);
        };
    }, []);

    const onScroll = useCallback((): void => {
        const startPos = currentScroll.current;
        const scrollPos = window.pageYOffset;
        if (startPos > scrollPos) {
            setIsHide(false);
        } else {
            setIsHide(true);
        }
        currentScroll.current = scrollPos;
    }, []);

    const onClickLogin = () => {
        history.push("/login");
    };
    const onClickTitle = () => {
        history.push("/top");
    };

    const className = isHide ? "header hide" : "header";

    return (
        <div className={className}>
            <AntdHeader>
                <Row align="middle" justify="space-between">
                    <Col>
                        <div onClick={onClickTitle}>
                            <Title className="title-logo">
                                Submarine stacks
                            </Title>
                        </div>
                    </Col>
                    <Col>
                        <Button className="primary" onClick={onClickLogin}>
                            Login
                        </Button>
                    </Col>
                </Row>
            </AntdHeader>
        </div>
    );
};
