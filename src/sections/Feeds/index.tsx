import React from "react";
import { Layout } from "antd";
import { AppHeader, AppFooter } from "../../utils/components";
import { FeedPanel } from "./components";
const { Content } = Layout;

export const Feeds = () => {
    return (
        <Layout className="feeds-page full-screen">
            <AppHeader />
            <Content className="full-screen__content ">
                <div className="feeds-page__content">
                    <FeedPanel />
                </div>
            </Content>
            <AppFooter />
        </Layout>
    );
};
