import styles from "./EducationField.module.css"
import OptionsButton from "../../components/UI/Buttons/OptionsButton/OptionsButton"
import {addIcon} from "../../constants"


function EducationField() {
  return (
    <div>
      <h2>Education Field</h2>
      <div className={styles.container}>
      <div className={styles.education}>
      <div classNmae={styles.input__container}>
        <label for="ins__name">Təhsil müəssisəsinin adı</label>
        <input 
          id="ins__name"
          className={styles.ins__name}
          type="text" 
          placeholder="Azerbaijan State University of Oil and Industry"/>
        </div>
        <div className={styles.edu__detail}>
          <div classNmae={styles.input__container}>
            <label for="spec__name">İxtisas adı</label>
            <input 
              id="spec__name"
              className={styles.spec__name}
              type="text"
              placeholder="Business Informatics"/>
          </div>    
          <OptionsButton 
            name="EducationLevel" 
            values={["Bkalavr", "Magistr", "PhD"]}/>
        </div>  
      </div>
      <div className={styles.add__education}>
          <a className={styles.add__edu__text}>{addIcon}  Əlavə et</a>
        </div>
      </div>
    </div>
  );
}

export default EducationField
