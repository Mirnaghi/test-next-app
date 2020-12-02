import styles from "./CreatePathField.module.css" 
import Modal from "react-modal"
import {useSelector, useDispatch} from "react-redux"
import {useForm} from "react-hook-form"
import BlueButton from "../../components/UI/Buttons/BlueButton/BlueButton"
import {openCreatePath} from "../../redux/createPathModalReducer"
import {createNewPath} from "../../redux/createNewPathReducer"

function CreatePathField() {

    const open = useSelector(state => state.createPathModal.createPathIsOpen);
    const GUID = useSelector(state => state.userAuth.user.id)
    const dispatch = useDispatch();
    const {register, handleSubmit, errors} = useForm();

    function onSubmit(data) {
        console.log({
            "name": data.pathName,
            "description": data.pathDescription,
            "creatorid": GUID,
            "difficulty": 0,
            "accessibility": 0
        })
        dispatch(createNewPath({
            "name": data.pathName,
            "description": data.pathDescription,
            "creatorid": GUID,
            "difficulty": 0,
            "accessibility": 0
        }))
    }

    return (
        <Modal 
            isOpen={open}
            onRequestClose={() => dispatch(openCreatePath())}
            className="modal"
        >
            <div className={styles.container}>
                <h2>Create New Path</h2>
                <form 
                    className={styles.form__field}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input type="text"
                            name="pathName"
                            placeholder="Path name"
                            ref={register({required: true})}/>
                    <input type="textarea"
                            name="pathDescription"
                            placeholder="Description"
                            ref={register({required: true})}/>
                    <BlueButton name="TAMAMLA"/>
                </form>
            </div>
        </Modal>
    );
}

export default CreatePathField