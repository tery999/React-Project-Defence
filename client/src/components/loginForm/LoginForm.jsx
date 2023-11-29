import { useContext, useEffect, useState } from 'react';
import styles from "../../../css/loginForm.module.css"
import AuthContext from '../../context/authContext';

export default function LoginForm() {
    const { loginHandler } = useContext(AuthContext);

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        loginHandler({...inputs})
    }

    return (
        <div className={styles.LoginStyle}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <p>Email:</p>
                <label htmlFor='email'>
                    <input
                        type="text"
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange}
                    />
                </label>
                <p>Password</p>
                <label htmlFor='password'>
                    <input
                        type="password"
                        name="password"
                        value={inputs.password || ""}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}