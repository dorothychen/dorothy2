import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        display: "flex",
        marginLeft: 26,
        height: "100%",
        flexDirection: "row-reverse",
        justifyContent: "flex-start",
    },
    imageWrapper: {
        minWidth: 200,
        width: 260,
        padding: 12,
        overflow: "hidden",
        height: "75vh",
    },
    img: (color) => ({
        width: "100%",
        height: "100%",
        objectFit: "cover",
        background: color,
    }),
    "@media screen and (max-width: 850px)": {
        container: {
            flexDirection: "column",
        },
        imageWrapper: {
            height: 170,
            width: '100%',
        },
    },
});

function BodyImage({ color }) {
    const styles = useStyles(color);

    return (
        <div className={styles.imageWrapper}>
            <div className={styles.img} />
        </div>
    );
}

function getColor(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}

export default function BodyContent(props) {
    const styles = useStyles();

    const r = 255;
    const g = 89;
    const b = 94;

    return (
        <div className={styles.container}>
            <BodyImage color={getColor(r, g, b)} />
            <BodyImage color={getColor(r + 15, g + 15, b + 15)} />
            <BodyImage color={getColor(r + 30, g + 30, b + 30)} />
            <BodyImage color={getColor(r + 45, g + 45, b + 45)} />
        </div>
    );
}
