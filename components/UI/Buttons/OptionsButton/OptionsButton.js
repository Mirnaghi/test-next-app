import {useState} from 'react'
import styles from "./OptionsButton.module.css"
import {dropdownIcon} from "../../../../constants"

function OptionsButton({name, values}) {

    const [selectedValue, setSelectedValue] = useState(values[0])

    const handleClick= (event) => {
        const newValue = event.target.value
        setSelectedValue(newValue)
    }

    return (
        <div className={styles.options}>
        <button className={styles.options__main_btn}>
            {selectedValue}
             <span className={styles.options__icon}>
                {dropdownIcon}
             </span>
        </button>

        <div className={styles.option__content}>
            { values.map(value => {
                return (
                    
                <button 
                    key={values.indexOf(value)} 
                    className={styles.option__button} 
                    value={value}
                    onClick={handleClick}
                >{value}</button>
                );
            })}
           
        </div>
    </div>
    )
}

export default OptionsButton