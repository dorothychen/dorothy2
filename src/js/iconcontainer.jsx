import { createUseStyles } from "react-jss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const useStyles = createUseStyles({
    container: {},
    icon: {
        display: "inline-block",
        fontSize: 18,
        marginRight: 12,
    },
});

function IconContainer({ faIcon, url, desc }) {
    const styles = useStyles();

    return (
        <div className={styles.icon}>
            <a href={url}>
                <FontAwesomeIcon icon={faIcon} />
            </a>
        </div>
    );
}

export default function IconRow() {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <IconContainer
                faIcon={faPaperPlane}
                url="mailto:dorothchen@gmail.com"
                desc="Email"
            />
            <IconContainer
                faIcon={faGithub}
                url="https://github.com/dorothychen"
                desc="Github"
            />
            <IconContainer
                faIcon={faLinkedin}
                url="https://www.linkedin.com/in/dorothchen/"
                desc="LinkedIn"
            />
        </div>
    );
}
