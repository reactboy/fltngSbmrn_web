import React from "react";
import {
    Header,
    HowToKeepUp,
    ResourceInput,
    ResourceOutput,
    RssIntroduction,
    Footer,
} from "./components";

export const Top = () => {
    return (
        <div className="top-page">
            <Header />
            <HowToKeepUp />
            <ResourceInput />
            <ResourceOutput />
            <RssIntroduction />
            <Footer />
        </div>
    );
};
