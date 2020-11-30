import styles from '../../styles/Modules.module.css'

import MenuBar from '../../components/MenuBar/MenuBar'
import ModuleCard from '../../containers/ModuleCard/ModuleCard'
import AddModuleCard from "../../components/AddModuleCard/AddModuleCard"
import RequirementsCard from '../../components/RequirementsCard/RequirementsCard'
import SupervisorsField from '../../containers/SupervisorsField/SupervisorsField'

import {getPathes, getCourses} from '../../services/pathServices'
 
export default function Modules({moduleData}){
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
                <AddModuleCard />
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

export async function getStaticPaths() {
    const allPathes = await getPathes().catch(err => {
        console.log(err);
        return {data: [{
            id: ""
        }]}
    })

    // const paths = allPathes.data.map(path => {
    //     return {
    //         params: {
    //             id: path.id
    //         }
    //     }
    // })

    const paths = [
        {
            params: {
                id: "1"
            }
        }
    ]

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    // const courses = await getCourses(params.id)

    const moduleData = {
        title: "CSS",
        enrollment: 255,
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sit, hic perferendis cupiditate nobis assumenda,tenetur illum quasi reprehenderit neque atque magni quod.Numquam explicbo exercitationem earum reprehenderit.Dignissimos, nemo dolor?",
        lessons: 12
    }

    return {
        props: {
            moduleData
        }
    }
}
