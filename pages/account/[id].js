import {useDispatch, useSelector} from 'react-redux'

import styles from '../../styles/Account.module.css'
import MenuBar from '../../components/MenuBar/MenuBar'
import SideBar from '../../containers/SideBar/SideBar'
import LearnedSpecialties from '../../containers/LearnedSpecialties/LearnedSpecialties'
import WishedSpecialties from '../../containers/WishedSpecialties/WishedSpecialties'
import UserPersonalInfo from '../../containers/UserPersonalInfo/UserPersonalInfo'

export default function account({userData}) {

    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.accountPage)


    /*
      params: page - currentPage from redux store
      returns: according component for currentPage
    */
    function renderCurrentPage(page) {
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
                    {renderCurrentPage(currentPage)}
                </section>
                <section className={styles.sidebar__section}>
                    <SideBar />
                </section>
            </div>
        </>
    );
}

export async function getStaticPaths(){
    const paths = [{params: {id: "1"}}];

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }){
    const userData = {
        fullname: "Emilia Clark",
        phone: '0553605913',
        email: "emilia_clark@gmail.com",
        img: "/supervisor.jpg"
    };

    return {
        props: {
            userData
        }
    }
}
