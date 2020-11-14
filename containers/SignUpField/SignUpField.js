import Modal from 'react-modal'
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from 'react-hook-form'
import {openSignUpModal, openLoginModal} from '../../redux/authModalReducer'
import { signInUser } from '../../redux/userAuthReducer'
import styles from './SignUpField.module.css'
import SignInButton from '../../components/UI/Buttons/SignInButton/SignInButton'

function SignUpField(){

    const signUpIsOpen = useSelector(state => state.authModal.signUp)
    const dispatch = useDispatch()
    const {register, handleSubmit, errors} = useForm()

    function onSubmit(formData) {
        const fullname = formData.fullname
        const userNickname = fullname.substring(0, fullname.indexOf(" ")) 
        + "_" 
        + fullname.substring(fullname.indexOf(" ") + 1, fullname.length - 1)
        
        console.log(formData)
        dispatch(signInUser({
            "nickname": userNickname.toLowerCase(),
            "fullName": fullname,
            "email": formData.email,
            "phone": formData.phone,
            "password": formData.password,
            "role": 0
        }))
    }

    return (
        <Modal className={styles.modal__style} isOpen={signUpIsOpen} onRequestClose={() => dispatch(openSignUpModal(false)) }>
            <div className={styles.signUp__body}>
                <h4>Qeydiyyatdan keç</h4>
                <form 
                    className={styles.register__form} 
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <label htmlFor="fullname">Ad, soyad</label>
                    <input 
                        id="fullname" 
                        className={styles.long__input} 
                        name="fullname" 
                        placeholder="Ad Soyad" 
                        ref={register({required: true})}/>
                    {errors.fullname ? <p className={styles.error}>Fullname teleb olunur</p> : null}

                    <label htmlFor="email">E-poçt ünvanı</label>
                    <input 
                        id="email"
                        className={styles.long__input} 
                        name="email" 
                        placeholder="AdSoyad@example.com" 
                        ref={register({required: true})}/>
                    {errors.email ? <p className={styles.error}>Email is required</p>: null}

                    <div className={styles.password__container}>  
                       <div className={styles.password}>
                            <label htmlFor="psswd">Parol</label>
                            <input  
                                id="psswd" 
                                className={styles.password__input} 
                                type="password" 
                                name="password"
                                placeholder="password" 
                                ref={register({required: true})}/>
                        </div> 
                        <div className={styles.password}>
                            <label htmlFor="psswd-confirm">Parolu tesdiq et</label>
                            <input 
                                id="psswd-confirm" 
                                className={styles.password__input} 
                                type="password" 
                                name="password_confirm" 
                                placeholder="password" 
                                ref={register({required: true})}/>
                        </div>
                    </div>
                    
                    <label htmlFor="fullname">Telefon nömrəsi</label>
                    <input 
                        className={styles.short__input} 
                        name="phone" 
                        placeholder="(___) ___ __ __" 
                        ref={register({required: true})}/>
                    
                    <div className={styles.signUp__button}>
                        <SignInButton name="Qeydiyyatdan keç" />
                    </div>
                </form>
                <p className={styles.login__link__p}>
                    Mövcud hesabınıza  
                    <a onClick={() => dispatch(openLoginModal(true))}>daxil olun</a>
                </p>
            </div>
        </Modal>
    )
}

export default SignUpField