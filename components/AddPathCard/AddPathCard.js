import styles from "./AddPathCard.module.css"
import Modal from "react-modal"
import {useSelector, useDispatch} from "react-redux"
import BlueButton from "../UI/Buttons/BlueButton/BlueButton"
import CreatePathField from "../../containers/CreatePathField/CreatePathField"
import {createContentIcon} from "../../constants"
import {openCreatePath} from "../../redux/createPathModalReducer"

function AddPathCard(props) {

    const dispatch = useDispatch()


    return (
        <>
            <div 
                className={styles.card}
                onClick={() => dispatch(openCreatePath())}
            >
                {createContentIcon}
            </div>
            <CreatePathField />
        </>
    );
}

export default AddPathCard
