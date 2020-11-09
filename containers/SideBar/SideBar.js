import {useDispatch} from 'react-redux'
import {changeAccountPage} from '../../redux/accountPageReducer.js'
import styles from './SideBar.module.css'
import SideBarButton from '../../components/UI/Buttons/SideBarButton/SideBarButton'

function SideBar() {

    const dispatch = useDispatch()

    return (
        <div className={styles.sidebar__container}>
            <div className={styles.button__wrapper}>
                <SideBarButton name="Öyrəndiyin ixtisaslar"
                               handleClick={() => dispatch(changeAccountPage('learned_specialties'))}/>
                <SideBarButton name="Olmasını istədiyin ixtisas"
                               handleClick={() => dispatch(changeAccountPage('wished_specialties'))}/>
                <SideBarButton name="Şəxsi məlumatlar"
                               handleClick={() => dispatch(changeAccountPage('user_personal_info'))}/>
            </div>
        </div>
    )
}

export default SideBar
