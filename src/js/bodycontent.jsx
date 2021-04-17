import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        display: "flex",
        marginLeft: 26,
        height: "100%",
        flexDirection: "row-reverse",
        justifyContent: "space-around",
    },
    imageWrapper: {
        minWidth: 200,
        padding: 20,
        overflow: "hidden",
        height: "75vh",
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    "@media screen and (max-width: 850px)": {
        container: {
            flexDirection: "column",
        },
        imageWrapper: {
            height: 170,
        },
    },
});

function BodyImage({src_url}) {
    const styles = useStyles();

    return (
        <div className={styles.imageWrapper}>
            <img className={styles.img} src={src_url} />
        </div>
    );
}

export default function BodyContent(props) {
    const styles = useStyles();
    const url = "//im.vsco.co/aws-us-west-2/46833b/32012341/5f9bb2f23bf8a166032602f5/vsco5f9bb2f3416ad.jpg?w=847&dpr=1";

    return (
        <div className={styles.container}>
            <BodyImage src_url={url} />
            <BodyImage src_url={url} />
            <BodyImage src_url={url} />
            <BodyImage src_url={url} />
        </div>
    );
}
