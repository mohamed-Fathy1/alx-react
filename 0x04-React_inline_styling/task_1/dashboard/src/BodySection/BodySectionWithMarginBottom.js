import React from "react";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px'
    }
})

const BodySectionWithMarginBottom = (props) => {
    return (
        <div className={css(styles.bodySectionWithMargin)}>
            <BodySection {...props} />
        </div>
    );
}

export default BodySectionWithMarginBottom;
