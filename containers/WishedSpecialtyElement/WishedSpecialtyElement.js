import styles from './WishedSpecialtyElement.module.css'
import WhiteButton from '../../components/UI/Buttons/WhiteButton/WhiteButton'
import VoteButton from '../../components/UI/Buttons/VoteButton/VoteButton'

function WishedSpecialtyElement({specialty}) {
  return (
    <tr className={styles.wished__specialty__tr}>
      <td className={styles.wished__specialty__td}>{specialty.name}</td>
      <td className={styles.wished__specialty__td}>{specialty.rank}</td>
      <td className={styles.wished__specialty__td}>{specialty.vote}</td>
      <td className={styles.wished__specialty__td}><VoteButton /></td>
      <td className={styles.wished__specialty__td}><WhiteButton name="Paylas" border={true}/></td>
    </tr>
  );
}

export default WishedSpecialtyElement
