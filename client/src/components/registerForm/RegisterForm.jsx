import { useContext, useEffect, useState } from 'react';
import styles from "./registerForm.module.css"
import {AuthContext} from '../../context/authContext';
import * as errorService from "../../services/errorService"

export default function registerForm() {
    const { registerHandler } = useContext(AuthContext);
    const [error, setError] = useState({});
    const [serverError, setServerError] = useState(false);

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repassword: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const curErrors = errorService.registerFormError(inputs)
            setError(curErrors);

            if (Object.keys(curErrors).length === 0) {

                await registerHandler({ ...inputs });

            }
        } catch (err) {
            debugger;
            console.log(err);
            setServerError(true);
        }

    }

    return (
        <div className={styles.RegisterStyle}>
            <form className={styles.RegisterForm} onSubmit={handleSubmit}>
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
                {serverError === true &&
                    <p className={styles.ErrorMessage}>There has been an error</p>
                }
                {error.email && (
                    <p className={styles.ErrorMessage}>{error.email}</p>
                )}
                <p>Password</p>
                <label htmlFor='password'>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={inputs.password || ""}
                        onChange={handleChange}
                    />
                    {error.password && (
                        <p className={styles.ErrorMessage}>{error.password}</p>
                    )}
                </label>
                <p>Repeat Password</p>
                <label htmlFor='repassword'>
                    <input
                        type="password"
                        name="repassword"
                        id="repassword"
                        value={inputs.repassword || ""}
                        onChange={handleChange}
                    />
                </label>
                {error.repassword && (
                    <p className={styles.ErrorMessage}>{error.repassword}</p>
                )}
                <input type="submit" />
            </form>
        </div>
    )
}