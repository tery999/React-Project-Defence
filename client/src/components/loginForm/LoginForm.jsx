import { useContext, useEffect, useState } from 'react';
import styles from "./loginForm.module.css"
import {AuthContext} from '../../context/authContext';

export default function LoginForm() {
    const { loginHandler , email } = useContext(AuthContext);

    const [inputs, setInputs] = useState({});
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
       await loginHandler( {...inputs}) 
        } catch (err) {
            console.log("ERROR AT HANDLE SUBMIT", err);
            setError(true);
        }
    }

    return (
        <div className={styles.LoginStyle}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <p>Email:</p>
                <label htmlFor='email'>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={inputs.email || ""}
                        onChange={handleChange}
                    />
                </label>
                <p>Password</p>
                <label htmlFor='password'>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={inputs.password || ""}
                        onChange={handleChange}
                    />
                </label>
                {error === true && 
                <p className={styles.ErrorMessage}>Invalid email or password</p>
                }
                <input type="submit" />
            </form>
        </div>
    )
}