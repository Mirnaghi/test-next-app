import styles from "./WishedSpecialties.module.css"
import SearchBar from "../../components/SearchBar/SearchBar"
import WishedSpecialtiesTable from '../WishedSpecialtiesTable/WishedSpecialtiesTable'

function WishedSpecialties() {
    return (
        <div className={styles.wished_spec__container}>
          <div className={styles.head__info}>
            <h1>Bəyəndiyiniz ixtisasa səs verin</h1>
            <p className={styles.head__info_p}>
              Bəyəndiyiniz ixtisasa səs verərək hansı sahəyə fikir verməli olduğumuzu bizə bildirin.Öyrənmək istədiyiniz ixtisası dostlarınızla paylaşın ki, onlarla birlikdə öyrənəsiniz.
              *Bəyənmədiyiniz ixtisaslara səs vermə.
            </p>
          </div>
          <div className={styles.search__for__vote}>
            <SearchBar
                    placeholder="Səs vermək üçün ixtisası axtar"/>
          </div>
          <div className={styles.wished__specialties__table}>
            <WishedSpecialtiesTable />
          </div>
        </div>
    );
}

export default WishedSpecialties
