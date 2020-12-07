import Modal from 'react-modal'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { openSignUpModal, openLoginModal } from '../../redux/authModalReducer'
import { signInUser } from '../../redux/userAuthReducer'
import styles from './SignUpField.module.css'
import SignInButton from '../../components/UI/Buttons/SignInButton/SignInButton'
import ValidationError from '../../components/ErrorHandling/ValidationError/ValidationError'

import { mailValidator, confirmPassword } from '../../utils/validators/authFormValidators'

function SignUpField() {

    const signUpIsOpen = useSelector(state => state.authModal.signUp)
    const dispatch = useDispatch()
    const { register, handleSubmit, errors } = useForm()

    // password confirmation 
    const [password, setPassword] = useState("")
    // const [confirm, setConfirm] = useState(initialState)


    function onSubmit(formData) {
        const fullname = formData.fullname
        const userNickname = fullname.substring(0, fullname.indexOf(" "))
            + "_"
            + fullname.substring(fullname.indexOf(" ") + 1, fullname.length)

        console.log(formData)
        // dispatch(signInUser({
        //     username: userNickname.toLowerCase(),
        //     fullname: fullname,
        //     email: formData.email,
        //     phone: formData.phone,
        //     password: formData.password,
        //     role: formData.user_type
        // }))
        // dispatch(openSignUpModal(false))
    }

    return (
        <Modal className={styles.modal__style} isOpen={signUpIsOpen} onRequestClose={() => dispatch(openSignUpModal(false))}>
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
                        ref={register({ required: true })} />
                    {
                        errors.fullname
                            ? <ValidationError errorMessage="Ad soyad teleb olunur" />
                            : null
                    }

                    <label htmlFor="mail">E-poçt ünvanı</label>
                    <input
                        id="mail"
                        className={styles.long__input}
                        name="email"
                        placeholder="AdSoyad@example.com"
                        ref={register({
                            required: true,
                            validate: value => mailValidator(value) === true
                        })} />
                    {errors.email && errors.email.type === "required"
                        ? <ValidationError errorMessage="Email teleb olunur" />
                        : errors.email && errors.email.type === "validate"
                            ? <ValidationError errorMessage="Mail formatı düzgün deyil" />
                            : null
                    }

                    <div className={styles.password__container}>
                        <div className={styles.password}>
                            <label htmlFor="psswd">Parol</label>
                            <input
                                id="psswd"
                                className={styles.password__input}
                                type="password"
                                name="password"
                                placeholder="password"
                                onChange={(e) => setPassword(e.target.value)}
                                ref={register({
                                    required: true,
                                    minLength: 8
                                })} />
                            {
                                errors.password && errors.password.type === "minLength"
                                ? <ValidationError errorMessage="minimum 8 character" />
                                : errors.password && errors.password.type === "required"
                                ? <ValidationError errorMessage="Parol teleb olunur" />
                                : null
                            }
                        </div>
                        <div className={styles.password}>
                            <label htmlFor="psswd-confirm">Parolu tesdiq et</label>
                            <input
                                id="psswd-confirm"
                                className={styles.password__input}
                                type="password"
                                name="password_confirm"
                                placeholder="confirm password"
                                ref={register({
                                    required: true,
                                    minLength: 8,
                                    validate: value => confirmPassword(password, value)
                                })} />
                            {
                                errors.password_confirm && errors.password_confirm.type === "maxLength"
                                ? <ValidationError errorMessage="Minimum 8 character" />
                                : errors.password_confirm && errors.password_confirm.type === "validate"
                                ? <ValidationError errorMessage="Parol uyğun deyil" />
                                : null
                            }
                        </div>
                    </div>

                    <label htmlFor="fullname">Telefon nömrəsi</label>
                    <input
                        className={styles.short__input}
                        name="phone"
                        placeholder="(___) ___ __ __"
                        ref={register({ required: true })} />

                    <div className={styles.userType}>
                        <p className={styles.userType__p}>Register as:</p>
                        <input 
                            id="std"
                            className={styles.radio__btn}
                            type="radio"
                            name="user_type"
                            value={0}
                            ref={register}/>
                        <span>Student</span>
                        <input 
                            className={styles.radio__btn}
                            type="radio"
                            name="user_type"
                            value={1}
                            ref={register}/> 
                        <span>Supervisor</span>     
                    </div>    

                    <div className={styles.signUp__button}>
                        <SignInButton name="Qeydiyyatdan keç" />
                    </div>
                </form>
                <p className={styles.login__link__p}>
                    Mövcud hesabınıza <a onClick={() => dispatch(openLoginModal(true))}>daxil olun</a>
                </p>
            </div>
        </Modal>
    )
}

export default SignUpField