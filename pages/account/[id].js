import styles from '../../styles/Account.module.css'
import MenuBar from '../../components/MenuBar/MenuBar'
import PersonalInfoTab from '../../components/PersonalInfoBar/PersonalInfoBar'
import SideBar from '../../containers/SideBar/SideBar'

export default function account({userData}) {
    return (
        <>
            <header> 
                <MenuBar /> 
            </header>
            <div className={styles.account__container}>
                <section className={styles.main__section}>
                    <PersonalInfoTab user={userData} />
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