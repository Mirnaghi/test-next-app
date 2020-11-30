import styles from "./AddModuleCard.module.css";
import {useDispatch} from "react-redux"
import {addModuleIcon} from "../../constants";
import {openCreateModule} from "../../redux/createPathModalReducer"
import CreateModuleField from "../../containers/CreateModuleField/CreateModuleField"

function AddModuleCard() {
    const dispatch = useDispatch()

    return (
        <>
            <a 
                class={styles.module__card}
                onClick={() => dispatch(openCreateModule())}
            >
                {addModuleIcon}
            </a>
            <CreateModuleField />
        </>
    );
}

export default AddModuleCard;