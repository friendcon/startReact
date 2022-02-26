import PropTypes from "prop-types";
import styles from "./Button.module.css";
function Button({text}) {
    return (
        <button className={styles.btn}>{text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}
/*
    다른 곳에서 Button을 가져올 수 있도록
    export 설정
 */
export default Button;