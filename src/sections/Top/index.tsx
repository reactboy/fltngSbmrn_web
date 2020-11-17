import React from "react";
import { Header, Footer } from "../../utils/components";
import {
    HowToKeepUp,
    ResourceInput,
    ResourceOutput,
    RssIntroduction,
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
