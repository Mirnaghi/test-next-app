import Modal from 'react-modal'
import {useDispatch, useSelector} from 'react-redux'
import {openSignUpModal} from '../../redux/authModalReducer'
import styles from './SignUpField.module.css'
import SignInButton from '../../components/UI/Buttons/SignInButton/SignInButton'

function SignUpField(){

    const signUpIsOpen = useSelector(state => state.authModal.signUp)
    const dispatch = useDispatch()

    return (
        <Modal className={styles.modal__style} isOpen={signUpIsOpen} onRequestClose={() => dispatch(openSignUpModal(false)) }>
            <div className={styles.signUp__body}>
                <h4>Qeydiyyatdan keç</h4>
                <form className={styles.register__form} onSubmit={() => console.log("Register form submitted")}>
                    <label for="fullname">Ad, soyad</label>
                    <input id="fullname" className={styles.long__input} name="fullname" placeholder="Ad Soyad"></input>
                    <label for="fullname">E-poçt ünvanı</label>
                    <input className={styles.long__input} name="email" placeholder="AdSoyad@example.com"></input>
        
                    <div className={styles.password__container}>  
                       <div className={styles.password}>
                            <label for="psswd">Parol</label>
                            <input  id="psswd" className={styles.password__input} type="password" name="password" placeholder="password"></input>
                        </div> 
                        <div className={styles.password}>
                            <label for="psswd-confirm">Parolu tesdiq et</label>
                            <input id="psswd-confirm" className={styles.password__input} type="password" name="password_confirm" placeholder="password"></input>
                        </div>
                    </div>
                    <label for="fullname">Telefon nömrəsi</label>
                    <input className={styles.short__input} name="phoneNumber" placeholder="(___) ___ __ __"></input>
                    <div className={styles.signUp__button}><SignInButton name="Qeydiyyatdan keç" /></div>
                </form>
                <p className={styles.login__link__p}>Mövcud hesabınıza  <a>daxil olun</a></p>
            </div>
        </Modal>
    )
}

export default SignUpField