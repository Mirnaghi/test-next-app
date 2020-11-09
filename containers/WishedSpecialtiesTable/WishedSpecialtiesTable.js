import styles from './WishedSpecialtiesTable.module.css'
import WishedSpecialtyElement from '../WishedSpecialtyElement/WishedSpecialtyElement'

function WishedSpecialtiesTable() {

  const specialties = [
    {"name": "Komputer ustası", "rank": 22, "vote": 754},
    {"name": "Komputer ustası", "rank": 22, "vote": 754},
    {"name": "Komputer ustası", "rank": 22, "vote": 754},
    {"name": "Komputer ustası", "rank": 22, "vote": 754},
    {"name": "Komputer ustası", "rank": 22, "vote": 754},
    {"name": "Komputer ustası", "rank": 22, "vote": 754},
  ]
  return (
    <table className={styles.wished__table}>
      <tr>
        <th className={styles.wished__table__head}>İxtisasın adı</th>
        <th className={styles.wished__table__head}>İxtisasın sırası</th>
        <th className={styles.wished__table__head}>Səs sayı</th>
        <th className={styles.wished__table__head}></th>
        <th className={styles.wished__table__head}></th>
      </tr>
      {specialties.map(spec => <WishedSpecialtyElement specialty={spec}/>)}
    </table>
  );
}


export default WishedSpecialtiesTable
