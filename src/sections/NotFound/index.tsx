import React from "react";
import { Layout } from "antd";
import { AppHeader, AppFooter } from "../../utils/components";
const { Content } = Layout;
export const NotFound = () => {
    return (
        <Layout className="not-found-page full-screen">
            <AppHeader />
            <Content className="full-screen__content">bookmarks</Content>
            <AppFooter />
        </Layout>
    );
};
