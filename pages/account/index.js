import {useDispatch, useSelector} from 'react-redux'

import styles from '../../styles/Account.module.css'
import MenuBar from '../../components/MenuBar/MenuBar'
import SideBar from '../../containers/SideBar/SideBar'
import LearnedSpecialties from '../../containers/LearnedSpecialties/LearnedSpecialties'
import WishedSpecialties from '../../containers/WishedSpecialties/WishedSpecialties'
import UserPersonalInfo from '../../containers/UserPersonalInfo/UserPersonalInfo'

export default function account() {

    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.accountPage)
    const userData = useSelector(state => state.userAuth.user)

    /*
      params: page - currentPage from redux store
      returns: according component for currentPage
    */
    function renderCurrentPage(page, userData) {
        if (page === 'learned_specialties') {
            return <LearnedSpecialties/>;
        }
        else if (page === 'wished_specialties') {
            return  <WishedSpecialties />;
        }
        else {
            return <UserPersonalInfo userData={userData} />;
        }
    }

    return (
        <>
            <header>
                <MenuBar />
            </header>
            <div className={styles.account__container}>
                <section className={styles.main__section}>
                    {renderCurrentPage(currentPage, userData)}
                </section>
                <section className={styles.sidebar__section}>
                    <SideBar />
                </section>
            </div>
        </>
    );
}

