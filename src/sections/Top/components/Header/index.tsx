import React, { useEffect, useState, useRef, useCallback } from "react";
import { Typography, Layout, Row, Col } from "antd";

const { Title } = Typography;
const { Header: AntdHeader } = Layout;

export const Header = () => {
    const [isHide, setIsHide] = useState<Boolean>(false);
    const currentScroll = useRef<number>(0);

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

    return (
        <AntdHeader className={isHide ? "hide" : ""}>
            <Row align="middle">
                <Col>
                    <Title>Submarine stacks</Title>
                </Col>
            </Row>
        </AntdHeader>
    );
};
