import MenuBar from '../../components/MenuBar/MenuBar'
import RequirementsCard from '../../components/RequirementsCard/RequirementsCard'
import SupervisorsField from '../../containers/SupervisorsField/SupervisorsField'
import LessonCard from '../../components/LessonCard/LessonCard'
import DropdownButton from '../../components/DropdownButton/DropdownButton'
import BlueButton from '../../components/UI/Buttons/BlueButton/BlueButton'

import styles from '../../styles/Modules.module.css'

import { userIconModule } from '../../constants'

export default function Modules({ lesson }){
    
    return (
        <div>
            <header>
                <MenuBar />
            </header>
            <div className={styles.modules__container}>
                <section className={styles.main__section}>
                    <section className={styles.head__section}>

                        <div class={styles.enrollment}>
                            <div className={`${styles.icon}`}>{userIconModule}</div>
                            <p className={styles.enrollment__p}>255 nəfər</p>
                        </div>

                        <div class={styles.main}>
                            <h2 className={styles.module__title}>HTML basic understanding</h2>
                            <p className={styles.main__p}>
                            Lorem ipsum, tenetur illum quasi reprehenderit neque atque magni quod.Numquam explicbo exercitationem earum reprehenderit.Dignissimos, nemo dolor?
                            </p>
                            <div class={styles.detail}>
                                <div className={styles.detail__p}> 
                                    <span> {module.lessons} dərs |</span> 
                                    <span> Video materiallar |</span> 
                                    <span> Xüsusi kontent</span>
                                </div>
                    
                            </div>
                        </div>

                    </section>
                    <section className={styles.offer__section}>
                        <p>Bu modula aid menbeler</p>
                        <BlueButton name="Mənbə təklif et"/>
                    </section>
                <section className={styles.filter__section}>
                    <DropdownButton name="Status" values={['Mutleq', 'Orta', 'Vacib']}/>
                    <DropdownButton name="Dil secimi" values={['Mutleq', 'Orta', 'Vacib']}/>
                    <DropdownButton name="Vaciblik" values={['Mutleq', 'Orta', 'Vacib']}/>
                    <DropdownButton name="Tipi" values={['Mutleq', 'Orta', 'Vacib']}/>
                    <DropdownButton name="Rate" values={['Mutleq', 'Orta', 'Vacib']}/>
                    <DropdownButton name="Qiymet" values={['Mutleq', 'Orta', 'Vacib']}/>
                </section>
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