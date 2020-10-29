import styles from '../../styles/Account.module.css'
import MenuBar from '../../components/MenuBar/MenuBar'
import PersonalInfoTab from '../../components/PersonalInfoBar/PersonalInfoBar'

export default function account({userData}) {
    return (
        <>
            <div id="header"> 
                <MenuBar /> 
            </div>
            <div className={styles.account__container}>
                <section className={styles.main__section}>
                    <PersonalInfoTab user={userData} />
                </section>
                <section className={styles.sidebar__section}>
                    
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