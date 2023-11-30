import { useContext, useEffect, useState } from 'react';
import styles from "../../../css/registerForm.module.css"
import AuthContext from '../../context/authContext';

export default function LoginForm() {
   const {registerHandler} = useContext(AuthContext);

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        registerHandler( {...inputs});
        
    }

    return (
        <div className={styles.RegisterStyle}>
            <form className={styles.RegisterForm} onSubmit={handleSubmit}>
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
                <p>Repeat Password</p>
                <label htmlFor='repassword'>
                    <input
                        type="password"
                        name="repassword"
                        value={inputs.password || ""}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}