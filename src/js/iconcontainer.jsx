import { createUseStyles } from "react-jss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const useStyles = createUseStyles({
    container: {
        marginTop: 24,
    },
    icon: {
        marginRight: 8,
    },
    iconRow: {
        fontFamily: "sans-serif",        
        fontSize: 16,
        marginBottom: 6,
        marginRight: 12,
        width: 'max-content',
        textColor: 'darkgrey',
    },
    iconRowHref: {
        '&:hover $underline' : {
            borderColor: 'rgba(242, 130, 130, 0.5)',
        },
        textDecoration: 'none',
        color: 'rgb(28, 28, 28)',
    },
    underline: {
        borderBottomStyle: 'inset',
        borderColor: 'rgba(242, 130, 130, 0.3)',
        borderWidth: 10,
        marginTop: '-8px',
    },
});

function IconContainer({ faIcon, url, desc }) {
    const styles = useStyles();

    return (
        <div className={styles.iconRow}>
            <a className={styles.iconRowHref} href={url}>
                <FontAwesomeIcon className={styles.icon} icon={faIcon} />
                {desc}
                <div className={styles.underline}> </div>
            </a>
        </div>
    );
}

export default function IconSection() {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <IconContainer
                faIcon={faPaperPlane}
                url="mailto:dorothchen@gmail.com"
                desc="email"
            />
            <IconContainer
                faIcon={faGithub}
                url="https://github.com/dorothychen"
                desc="github"
            />
            <IconContainer
                faIcon={faLinkedin}
                url="https://www.linkedin.com/in/dorothchen/"
                desc="linkedIn"
            />
        </div>
    );
}
