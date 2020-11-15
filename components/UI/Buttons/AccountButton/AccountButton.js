import styles from "./AccountButton.module.css"

function AccountButton({userName, userImg}) {
    return (
        <div className={styles.accountButton}>
            <p className={styles.userName}>{userName}</p>
            <img className={styles.userImg} src={userImg} />
        </div>
    )
}

export default AccountButton