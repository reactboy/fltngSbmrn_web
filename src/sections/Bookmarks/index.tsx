import React from "react";
import { Layout } from "antd";
import { AppHeader, AppFooter } from "../../utils/components";
const { Content } = Layout;
export const Bookmarks = () => {
    return (
        <Layout className="bookmarks-page full-screen">
            <AppHeader />
            <Content className="full-screen__content">bookmarks</Content>
            <AppFooter />
        </Layout>
    );
};
