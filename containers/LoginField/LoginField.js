import Modal from 'react-modal'
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {openLoginModal, openSignUpModal} from '../../redux/authModalReducer'
import { showSpinner } from '../../redux/showSpinnerReducer'
import {logInUser} from '../../redux/userAuthReducer'
import styles from './LoginField.module.css'
import SignInButton from '../../components/UI/Buttons/SignInButton/SignInButton'
import ValidationError from '../../components/ErrorHandling/ValidationError/ValidationError'
import Spinner from '../../components/Spinner/Spinner'

function LoginField(){

    const loginIsOpen = useSelector(state => state.authModal.login)

    const spinnerIsShowen = useSelector(state => state.showSpinner) 


    const dispatch = useDispatch()
    const {register, handleSubmit, errors} = useForm()

    function onSubmit(formData) {

        // show spinner on submit
        dispatch(showSpinner(true))
        setTimeout(() => {
            dispatch(showSpinner(false));
            dispatch(openLoginModal(false));
        }, 2000)

        console.log("Login user data: ", formData)
        dispatch(logInUser({
            "userid": formData.email,
            "password": formData.password
        }))
    }

    return (
        <Modal 
            className={styles.modal__style} 
            isOpen={loginIsOpen} 
            onRequestClose={() => dispatch(openLoginModal(false))}
        >
            <div className={styles.login__body}>
                <h4 className={styles.login__head}>Daxil ol</h4>

                {spinnerIsShowen ? <Spinner /> : null}
                
                <form 
                    className={styles.login__form} 
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <label for="email">E-poçt ünvanı</label>
                        <input 
                            id="email" 
                            className={styles.long__input} 
                            name="email" 
                            placeholder="AdSoyad@example.com" 
                            ref={register({required: true})} />
                        {errors.email ? <ValidationError  errorMessage="Email teleb olunur" /> : null}
                    </div> 
                    <div className={styles.input__wrapper}>
                        <label for="password">Parol</label>
                        <input 
                            id="password" 
                            className={styles.password__input} 
                            type="password" 
                            name="password" 
                            placeholder="password" 
                            ref={register({required: true})} />
                        {errors.password ? <ValidationError  errorMessage="Parol teleb olunur" /> : null}
                    </div>
                    <div className={styles.login__button}><SignInButton name="Daxil ol" /></div>
                
                    <p className={styles.signIn__link__p}>
                        Hesab yoxdursa <a onClick={() => dispatch(openSignUpModal(true))}>qeydiyyatdan keç</a>
                    </p>
                
                </form>  
            </div>
        </Modal>
    )
}

export default LoginField