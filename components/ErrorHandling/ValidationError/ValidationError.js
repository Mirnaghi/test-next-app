import styles from "./ValidationError.module.css"
import {errorIcon} from "../../../constants"

function ValidationError({errorMessage}) {
    return (
        <p className={styles.error}>{errorIcon} {errorMessage}</p>
    )
}

export default ValidationError