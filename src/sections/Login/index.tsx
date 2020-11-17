import React from "react";
import { Layout } from "antd";
import { Header, Footer } from "../../utils/components";
import { LoginPanel } from "./components";

const { Content } = Layout;

export const Login = () => {
    return (
        <Layout className="login-page full-screen">
            <Header />
            <Content className="full-screen__content">
                <LoginPanel />
            </Content>
            <Footer />
        </Layout>
    );
};
