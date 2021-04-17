import React from "react";
import ReactDOM from "react-dom";

import Title from "./title.jsx";
import BodyContent from "./bodycontent.jsx";
import IconRow from "./iconcontainer.jsx";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    root: {
        margin: 16,
    },
    title: {
        marginTop: 36,
        position: "absolute",
    },
    bodyContent: {
        paddingTop: 52,
    },
});

function App() {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.title}>
                {" "}
                <Title value="Dorothy Chen" />
                <IconRow />
            </div>
            <div className={styles.bodyContent}>
                <BodyContent />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));