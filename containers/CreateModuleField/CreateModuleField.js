import styles from "./CreateModuleField.module.css";
import Modal from "react-modal";
import {useSelector, useDispatch} from "react-redux"
import {openCreateModule} from "../../redux/createPathModalReducer"
import {useForm} from "react-hook-form"
import BlueButton from "../../components/UI/Buttons/BlueButton/BlueButton"

function CreateModuleField() {

    const open = useSelector(state => state.createPathModal.createModuleIsOpen)
    const dispatch = useDispatch()
    const {register, handleSubmit, errors} = useForm()

    return (
        <Modal isOpen={open}
               className={styles.modal__style}
               onRequestClose={() => dispatch(openCreateModule())}>
            <div 
                className={styles.container}
            >
                <h2>Add Module</h2>
                <form 
                    onSubmit={handleSubmit}
                    className={styles.form_tag}
                >
                    <input 
                        id="module_name"
                        name="module_name"
                        type="text"
                        placeholder="Module name"
                        ref={register()}/>
                    <input 
                        id="description"
                        name="description"
                        type="textarea"
                        placeholder="Module description"
                        />
                    <BlueButton name="TAMAMLA" />
                </form>
            </div>
        </Modal>
    );
}

export default CreateModuleField;