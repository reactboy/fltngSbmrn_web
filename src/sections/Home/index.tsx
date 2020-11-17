import React from "react";
import { Layout } from "antd";
import { AppHeader, AppFooter } from "../../utils/components";
const { Content } = Layout;
export const Home = () => {
    return (
        <Layout>
            <AppHeader />
            <Content className="full-screen__content">Home</Content>
            <AppFooter />
        </Layout>
    );
};
