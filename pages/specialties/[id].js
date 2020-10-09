import styles from '../../styles/Specialties.module.css'

import MenuBar from '../../components/MenuBar/MenuBar'
import ModuleCard from '../../components/ModuleCard/ModuleCard'

export default function Specialties({moduleData}){
    return (
        <>
            <MenuBar></MenuBar>
            <div className={styles.specialties__container}>
                <section className={styles.module__section}>
                <ModuleCard module={moduleData}></ModuleCard>
                </section>
                <section className={styles.detail__section}>

                </section>
            </div>  
        </>
    )
}

export async function getStaticPaths(){
    const paths = [{params: {id: "1"}}];

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const moduleData = {
        "enrollment": 255,
        "title": "CSS",
        "lessons": 12,
        "info": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sit, hic perferendis cupiditate nobis assumenda,tenetur illum quasi reprehenderit neque atque magni quod.Numquam explicbo exercitationem earum reprehenderit.Dignissimos, nemo dolor?" 
    };
    
    return {
        props: {
            moduleData
        }
    } 
}