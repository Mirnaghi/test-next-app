import OptionsButton from "../../components/UI/Buttons/OptionsButton/OptionsButton"
import styles from "./LanguageSkillField.module.css"
import {addIcon, removeIcon} from "../../constants"


function LanguageSkillField() {

  // const handleLangAdd = () {

  // }

  
  return (
    <div>
      <h2>Language Field</h2>
      <div className={styles.container}>
        <div className={styles.languages}>
        <div className={styles.language}>
          <OptionsButton name="language" values={["English", "Azeri", "Turkce", "Russich"]} />
          <OptionsButton name="level" values={["Beginner", "Elementary", "Intermediate", "Advance"]} />
          <span>{removeIcon}</span>
        </div>

        <div className={styles.language}>
          <OptionsButton name="language" values={["English", "Azeri", "Turkce", "Russich"]} />
          <OptionsButton name="level" values={["Beginner", "Elementary", "Intermediate", "Advance"]} />
          <span>{removeIcon}</span>
        </div>

        </div>
        
        <div className={styles.add__language}>
          <a 
            className={styles.add__lang__text}
            onClick={handleLangAdd} 
          >{addIcon}  Əlavə et</a>
        </div>
      </div>
    </div>
  );
}

export default LanguageSkillField
