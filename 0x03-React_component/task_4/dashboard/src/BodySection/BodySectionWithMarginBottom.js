import React from "react";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css";

const BodySectionWithMarginBottom = (props) => {
    return (
        <div className="bodySectionWithMargin">
            <BodySection {...props} />
        </div>
    );
}

export default BodySectionWithMarginBottom;
