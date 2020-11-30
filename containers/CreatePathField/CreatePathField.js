import styles from "./CreatePathField.module.css" 
import Modal from "react-modal"
import {useSelector, useDispatch} from "react-redux"
import {useForm} from "react-hook-form"
import BlueButton from "../../components/UI/Buttons/BlueButton/BlueButton"
import {openCreatePath} from "../../redux/createPathModalReducer"
function CreatePathField() {

    const open = useSelector(state => state.createPathModal.createPathIsOpen)
    const dispatch = useDispatch()

    return (
        <Modal 
            isOpen={open}
            onRequestClose={() => dispatch(openCreatePath)}
            className="modal"
        >
            <div className={styles.container}>
                <h2>Create New Path</h2>
                <form 
                    className={styles.form__field}
                >
                    <input type="text"
                            placeholder="Path name"/>
                    <input type="textarea"
                            placeholder="Description"/>
                    <BlueButton name="TAMAMLA"/>
                </form>
            </div>
        </Modal>
    );
}

export default CreatePathField