import MenuBar from '../../components/MenuBar/MenuBar'
import RequirementsCard from '../../components/RequirementsCard/RequirementsCard'
import SupervisorsField from '../../containers/SupervisorsField/SupervisorsField'
import LessonCard from '../../components/LessonCard/LessonCard'

import styles from '../../styles/Modules.module.css'

export default function Modules({ lesson }){
    
    return (
        <div>
            <div id="header">
                <MenuBar />
            </div>
            <div className={styles.modules__container}>
                <section className={styles.lessons__section}>
                    <div className={styles.filter__names}>
                        <p className={styles.filter__name__head}>Status / Adi</p>  
                    <div className={styles.filter__names__inner}>      
                        <p className={styles.filter__name}>Dil secimi</p>
                        <p className={styles.filter__name}>Vacib</p>
                        <p className={styles.filter__name}>Tipi</p>
                        <p className={styles.filter__name}>Rate</p>
                        <p className={styles.filter__name}>Qiymeti</p>
                    </div>    
                    </div>
                    <LessonCard />
                    <LessonCard />
                    <LessonCard />
                    <LessonCard />

                </section>
                <section className={styles.detail__section}>
                    <RequirementsCard />
                    <SupervisorsField />
                </section>
            </div>
        </div>

    );
}

export async function getStaticPaths(){
    const paths = [{ params: {id: 'html'}}]

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({ params }){
    const lessons = [{
            name: "HTML nedir?",
            language: 'AZE',
            importance: 'Mutleq',
            type: 'video',
            price: 'free',
            rating: 4.5, 
        },
        {
            name: "HTML nedir?",
            language: 'AZE',
            importance: 'Mutleq',
            type: 'video',
            price: 'free',
            rating: 4.5, 
        }
    ]

    return {
        props: {
            lessons
        }
    }
}