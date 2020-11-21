import OptionsButton from "../../components/UI/Buttons/OptionsButton/OptionsButton"
import styles from "./LanguageSkillField.module.css"
import {addIcon, removeIcon} from "../../constants"

function LanguageSkillField() {
  return (
    <div>
      <h2>Lang Field</h2>
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

        {/* <div className={styles.language}>
          <OptionsButton name="language" values={["English", "Azeri", "Turkce", "Russich"]} />
          <OptionsButton name="level" values={["Beginner", "Elementary", "Intermediate", "Advance"]} />
          <span>{removeIcon}</span>
        </div> */}
        </div>
        
        <div className={styles.add__language}>
          <span className={styles.add__lang__text}>{addIcon}  Əlavə et</span>
        </div>
      </div>
    </div>
  );
}

export default LanguageSkillField
