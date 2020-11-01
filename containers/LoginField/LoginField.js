import Modal from 'react-modal'
import {useDispatch, useSelector} from 'react-redux'
import {openLoginModal, openSignUpModal} from '../../redux/authModalReducer'
import styles from './LoginField.module.css'
import SignInButton from '../../components/UI/Buttons/SignInButton/SignInButton'

function LoginField(){

    const loginIsOpen = useSelector(state => state.authModal.login)
    const dispatch = useDispatch()

    return (
        <Modal className={styles.modal__style} isOpen={loginIsOpen} onRequestClose={() => dispatch(openLoginModal(false))}>
            <div className={styles.login__body}>
                <h4 className={styles.login__head}>Daxil ol</h4>
                <form className={styles.login__form} onSubmit={() => console.log("Login form submitted")}>
                    <div>
                        <label for="email">E-poçt ünvanı</label>
                        <input id="email" className={styles.long__input} name="email" placeholder="AdSoyad@example.com"></input>
                    </div> 
                    <div className={styles.input__wrapper}>
                        <label for="password">Parol</label>
                        <input  id="password" className={styles.password__input} type="password" name="password" placeholder="password"></input>
                    </div>
                </form>
                <div className={styles.login__button}><SignInButton name="Daxil ol" /></div>
                <p className={styles.signIn__link__p}>Hesab yoxdursa <a onClick={() => dispatch(openSignUpModal(true))}>qeydiyyatdan keç</a></p>
            </div>
        </Modal>
    )
}

export default LoginField