import styles from './VoteButton.module.css'

function VoteButton({ handleClick }) {
  const voted = false;

  return (
    <button className={ voted ? styles.vote : styles.unvote }>{voted ? 'Səs ver' : 'Səsi geri al'}</button>
  );
}

export default VoteButton
