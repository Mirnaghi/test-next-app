import styles from '../../styles/Modules.module.css'

import MenuBar from '../../components/MenuBar/MenuBar'
import ModuleCard from '../../containers/ModuleCard/ModuleCard'
import AddModuleCard from "../../components/AddModuleCard/AddModuleCard"
import RequirementsCard from '../../components/RequirementsCard/RequirementsCard'
import SupervisorsField from '../../containers/SupervisorsField/SupervisorsField'

import {getPaths, getCourses} from '../../services/pathServices'
 
export default function Modules({courses}){
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
                {courses.map(course => <ModuleCard module={course}></ModuleCard>)}
                </section>
                <section className={styles.detail__section}>
                    <RequirementsCard/>
                    <SupervisorsField></SupervisorsField>
                </section>
            </div>
        </>
    )
}



export async function getServerSideProps(context){
    const courses = await getCourses(context.query.id);

    // for debug
    console.log("Courses: ", courses);

    return {
        props: {
            courses
        }
    }
}
