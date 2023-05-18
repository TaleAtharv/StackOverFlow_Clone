import React from 'react'
import icon from '../../images/logo.png'
import '../Pages/Auth/Auth.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase"
import { useDispatch } from 'react-redux'
import { loginOtp } from '../../actions/auth'

const LoginOtp = () => {
    const [number, setNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [name, setName] = useState('')
    const [flag, setFlag] = useState(false);
    const [confirmObj, setConfirmObj] = useState("");
    const navigate = useNavigate()
    const disptach = useDispatch()

    function setUpRecaptha(number) {
        const recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {},
            auth
        );

        recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVerifier);
    }

    const getOtp = async (e) => {
        e.preventDefault();
        if (number === "" || number === undefined)
            alert("please enter a valid phone number");
        try {
            const response = await setUpRecaptha(number);
            console.log(response)
            setConfirmObj(response);
            setFlag(true);
        } catch (error) {
            console.log(error)
        }

        console.log(number)
    }

    const verifyOtp = async (e) => {
        e.preventDefault();
        if (otp === "" || otp === null) return;
        try {
            await confirmObj.confirm(otp);
            disptach(loginOtp({ name, number }, navigate))
        } catch (error) {
            console.log(error)
        }
    };



    return (
        <div className='auth-section'>
            <div className='auth-container-2'>
                <img src={icon} alt='Stack Overflow' className='login-logo'></img>
                <form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
                    <label htmlFor="name">
                        <h4>Display Name</h4>
                        <input type="text" id='name' name='name' onChange={(e) => { setName(e.target.value) }} />
                    </label>
                    <PhoneInput
                        className='input-phone'
                        value={number}
                        onChange={setNumber}
                        placeholder="Enter Phone Number."
                    />
                    < div id="recaptcha-container" />
                    <div className='btn-otp'>
                        <Link to={'/Auth'}>
                            <button id='first-btn' >Cancel</button>
                        </Link>
                        <button type='submit'>Send OTP</button>
                    </div>
                </form>
                <form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>

                    <input type="text" placeholder='Enter Otp' onChange={(e) => { setOtp(e.target.value) }} />
                    <div className='btn-otp'>
                        <Link to={'/Auth'}>
                            <button id='first-btn'>Cancel</button>
                        </Link>
                        <button type='submit'>Verify OTP</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginOtp
