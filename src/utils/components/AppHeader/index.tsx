import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { Layout, Typography, Row, Col, Button, Menu, Dropdown } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const LoginUserMenu = () => {
    const history = useHistory();
    const loginUserMenu = useMemo(() => {
        return [
            {
                text: "Feeds",
                onClick: () => {
                    history.push("/feeds");
                },
                danger: false,
            },
            {
                text: "Bookmarks",
                onClick: () => {
                    history.push("/bookmarks");
                },
                danger: false,
            },
            {
                text: "Profile",
                onClick: () => {
                    history.push("/profile");
                },
                danger: false,
            },
            {
                text: "Logout",
                onClick: () => {
                    history.push("/top");
                },
                danger: true,
            },
        ];
    }, []);
    const onClickMenu = ({ key }: any) => {
        const clickHandler = loginUserMenu[key].onClick;
        typeof clickHandler === "function" && clickHandler();
    };
    return (
        <Menu onClick={onClickMenu}>
            {loginUserMenu.map((item, i) => (
                <Menu.Item key={i} danger={item.danger}>
                    {item.text}
                </Menu.Item>
            ))}
        </Menu>
    );
};

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
                            <Dropdown
                                placement="bottomCenter"
                                overlay={<LoginUserMenu />}
                            >
                                <Button className="primary">menu</Button>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </Header>
        </div>
    );
};
