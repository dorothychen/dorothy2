import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    titleText: {
        fontSize: 60
    },
});

export default function Title(props) {
    const styles = useStyles();
    return <div className={styles.titleText}>{props.value}</div>;
}