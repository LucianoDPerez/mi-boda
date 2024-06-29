import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import useDB from "@/hooks/useDB";
import Menu from "@/components/Menu";
import SmoothScroll from "./SmoothScroll";
import { BrowserView, MobileView } from "react-device-detect";

/** _Guest layout_
 * @param {React.ReactNode} options.children
 * @param {string} options.title
 * @return {React.ReactElement}
 */
const GuestLayout = ({ children, ...rest }) => {
    const app = useDB((db) => db.application);

    /** _Update title on document._ */
    React.useEffect(() => {
        document.title = app.name;
    }, [app]);

    /** _Content_ */
    const content = (
        <Box component="main" id="mainContent" {...rest}>
            {children}
        </Box>
    );

    /** _Render component._ */
    return (
        <>
            <Menu />
            <BrowserView>
                <SmoothScroll>{content}</SmoothScroll>
            </BrowserView>
            <MobileView>{content}</MobileView>
        </>
    );
};

/** _Prop types_ */
GuestLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

/** _Default props_ */
GuestLayout.defaultProps = {};

export default GuestLayout;