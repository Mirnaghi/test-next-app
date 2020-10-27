import Modal from 'react-modal'
import {useDispatch, useSelector} from 'react-redux'
import {openLoginModal} from '../../redux/authModalReducer'
import styles from './LoginField.module.css'

function LoginField(){

    const loginIsOpen = useSelector(state => state.authModal.login)
    const dispatch = useDispatch()

    return (
        <Modal className={styles.modal__style} isOpen={loginIsOpen} onRequestClose={() => dispatch(openLoginModal(false))}>
            <div className={styles.login__body}>
            <h2>Login field in here</h2>
            </div>
        </Modal>
    )
}

export default LoginField