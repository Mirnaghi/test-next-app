import styles from '../../styles/Specialties.module.css'

import MenuBar from '../../components/MenuBar/MenuBar'
import ModuleCard from '../../containers/ModuleCard/ModuleCard'
import RequirementsCard from '../../components/RequirementsCard/RequirementsCard'
import SupervisorsField from '../../containers/SupervisorsField/SupervisorsField'

export default function Specialties({moduleData}){
    return (
        <>
            <header >
                <MenuBar />
            </header>
            <div className={styles.specialties__container}>
                <section className={styles.module__section}>
                    <div className={styles.module__head}>
                        <h3>Lorem ipsum dolor</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sit, hic perferendis cupiditate nobis assumenda,tenetur illum quasi reprehenderit neque atque magni quod.Numquam explicbo exercitationem earum reprehenderit.Dignissimos, nemo dolor?</p>
                    </div>

                <ModuleCard module={moduleData}></ModuleCard>
                <ModuleCard module={moduleData}></ModuleCard>
                <ModuleCard module={moduleData}></ModuleCard>
                <ModuleCard module={moduleData}></ModuleCard>
                </section>
                <section className={styles.detail__section}>
                    <RequirementsCard/>
                    <SupervisorsField></SupervisorsField>
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
        "info": "Lorem ipsum, tenetur illum quasi reprehenderit neque atque magni quod.Numquam reprehenderit.Dignissimos, nemo dolor?"
    };

    return {
        props: {
            moduleData
        }
    }
}
