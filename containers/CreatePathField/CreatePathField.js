import styles from "./CreatePathField.module.css"
import Modal from "react-modal"
import { useSelector, useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import BlueButton from "../../components/UI/Buttons/BlueButton/BlueButton"
import Spinner from "../../components/Spinner/Spinner"
import { openCreatePath } from "../../redux/createPathModalReducer"
import { createNewPath } from "../../redux/createNewPathReducer"
import { showSpinner } from "../../redux/showSpinnerReducer"

function CreatePathField() {

    // state of CreatePathFiled Modal open
    const open = useSelector(state => state.createPathModal.createPathIsOpen);

    // user`s id for createing path
    const GUID = useSelector(state => state.userAuth.user.id);

    // state of spinner
    const spinnerIsShown = useSelector(state => state.showSpinner);

    // state for unsuccessful create path
    const success = useSelector(state => state.createPath.success);


    // initialize hooks
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();


    function onSubmit(data) {
        /*
            function for handling form submit,
            params: takes form data as parameter
        */

        // onSubmit show spinner
        dispatch(showSpinner(true));

        setTimeout(() => dispatch(showSpinner(false)), 3000);

        // console input data for DEBUG
        console.log("Data in path creation", {
            "name": data.pathName,
            "description": data.pathDescription,
            "creatorid": GUID,
            "difficulty": 0,
            "accessibility": 0
        })

        // dispatch form data 
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
                {spinnerIsShown ? <Spinner /> : null}
                {
                    success === null
                        ? null
                        : success === true
                            ? <p className={styles.successMessage}>Successful!</p>
                            : <p className={styles.successMessage}>Unsuccessful!</p>
                }
                <form
                    className={styles.form__field}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input type="text"
                        name="pathName"
                        placeholder="Path name"
                        ref={register({ required: true })} />
                    <input type="textarea"
                        name="pathDescription"
                        placeholder="Description"
                        ref={register({ required: true })} />
                    <BlueButton name="TAMAMLA" />
                </form>
            </div>
        </Modal>
    );
}

export default CreatePathField