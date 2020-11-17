import React from "react";
import { Layout } from "antd";
import { AppHeader, AppFooter } from "../../utils/components";
const { Content } = Layout;
export const Profile = () => {
    return (
        <Layout className="profile-page full-screen">
            <AppHeader />
            <Content className="full-screen__content">Profile</Content>
            <AppFooter />
        </Layout>
    );
};
