import { useContext, useEffect, useState } from 'react';
import styles from "../../../css/registerForm.module.css"
import AuthContext from '../../context/authContext';
import * as errorService from "../../services/errorService"

export default function LoginForm() {
   const {registerHandler} = useContext(AuthContext);
   const [error, setError] = useState({});

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

    const handleSubmit = (event) => {
        event.preventDefault();
       const curErrors = errorService.registerFormError(inputs)
       setError(curErrors);

       if (Object.keys(curErrors).length === 0 ) {
        registerHandler( {...inputs});
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
                        value={inputs.email || ""}
                        onChange={handleChange}
                    />
                </label>
                {error.email && (
                    <p>{error.email}</p>
                )}
                <p>Password</p>
                <label htmlFor='password'>
                    <input
                        type="password"
                        name="password"
                        value={inputs.password || ""}
                        onChange={handleChange}
                    />
                    {error.password && (
                    <p>{error.password}</p>
                )}
                </label>
                <p>Repeat Password</p>
                <label htmlFor='repassword'>
                    <input
                        type="password"
                        name="repassword"
                        value={inputs.repassword || ""}
                        onChange={handleChange}
                    />
                </label>
                {error.repassword && (
                    <p>{error.repassword}</p>
                )}
                <input type="submit" />
            </form>
        </div>
    )
}