import styles from './UserPersonalInfo.module.css'
import PersonalInfoTab from '../../components/PersonalInfoTab/PersonalInfoTab'
import EducationField from '../EducationField/EducationField'
import LanguageSkillField from '../LanguageSkillField/LanguageSkillField'

function UserPersonalInfo(userData) {
    return (
        <div className={styles.container}>
            <PersonalInfoTab user={userData} />
            <div className={styles.skills}>
                
                <LanguageSkillField />
                <EducationField />
                
            </div>
        </div>
    );
} 

export default UserPersonalInfo