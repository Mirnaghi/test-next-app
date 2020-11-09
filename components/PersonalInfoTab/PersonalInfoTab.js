import styles from './PersonalInfoTab.module.css'

function PersonalInfoBar({ user }){
    return (
        <div className={styles.container}>
            <img className={styles.photo} src={user.img}/>
            <div className={styles.input__container}>
                <label for="fname">Ad, soyad</label>
                <input id="fname" className={styles.input__field} type="text" name="fullname" value={user.fullname}/>
            </div>
            <div className={styles.input__container}>
                <label for="phone">Telefon</label>
                <input id="phone" className={styles.input__field} type="text" name="phoneNumber" value={user.phone}/>
            </div>
            <div className={styles.input__container_lg}>
                <label for="email">E-poçt ünvanı</label>
                <input id="email" className={styles.input__field} type="email" name="email" value={user.email}/>
            </div>
        </div>
    );
}

export default PersonalInfoBar