import styles from './SideBar.module.css'
import SideBarButton from '../../components/UI/Buttons/SideBarButton/SideBarButton'

function SideBar() {
    return (
        <div className={styles.sidebar__container}>
            <div className={styles.button__wrapper}>
                <SideBarButton name="Öyrəndiyin ixtisaslar"/>
                <SideBarButton name="Olmasını istədiyin ixtisas"/>
                <SideBarButton name="Şəxsi məlumatlar"/>
            </div>
        </div>
    )
}

export default SideBar