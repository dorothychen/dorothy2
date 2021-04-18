import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    titleText: {
        fontFamily: "Work Sans, Helvetica Neue, sans-serif",
        fontSize: 64,
        fontWeight: 'bold',
    },
});

export default function Title(props) {
    const styles = useStyles();
    return <div className={styles.titleText}>{props.value}</div>;
}