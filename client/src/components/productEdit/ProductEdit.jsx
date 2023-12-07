import { useEffect, useState } from 'react';
import styles from "./EditProductForm.module.css"
import * as productService from "../../services/productService"
import * as errorService from "../../services/errorService"
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductEdit() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const { id } = useParams();
    const [error, setError] = useState({});

    useEffect(() => {
        productService.getOne(id)
            .then(result => setInputs(result))
            .then(console.log(id))
    }, [id]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = errorService.addProductValidation(inputs);
        setError(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            productService.edit(inputs)
            navigate("/");
        }
    }

    return (
        <div className={styles.DivProduct}>
            <form className={styles.AddProductForm} onSubmit={handleSubmit}>
                <label htmlFor='name' className={styles.labelStyle}>Product name:
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={inputs.name || ""}
                        onChange={handleChange}
                    />
                </label>
                {error.name && (
                    <p className={styles.ErrorMessage}>{error.name}</p>
                )}
                <label htmlFor='category' className={styles.labelStyle}>Category:
                    <input
                        type="text"
                        name="category"
                        id="category"
                        value={inputs.category || ""}
                        onChange={handleChange}
                    />
                </label>
                {error.category && (
                    <p className={styles.ErrorMessage}>{error.category}</p>
                )}
                <label htmlFor='price' className={styles.labelStyle}>Price:
                    <input
                        type="number"
                        name="price"
                        id="price"
                        value={inputs.price || ""}
                        onChange={handleChange}
                    />
                </label>
                {error.price && (
                    <p className={styles.ErrorMessage}>{error.price}</p>
                )}
                <label htmlFor="condition" className={styles.labelStyle}>
                    Condition:
                    <select value={inputs.condition || ""} name="condition"
                    id="condition" onChange={handleChange}>
                    <option value="New">New</option>
                    <option value="Minor Use">Minor Use</option>
                    <option value="Used">Used</option>
                    <option value="Bad">Bad</option>
                </select>
                </label>
                {error.condition && (
                    <p className={styles.ErrorMessage}>{error.condition}</p>
                )}
                
                <label htmlFor='imageUrl' className={styles.labelStyle}>imageUrl:
                    <input
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        value={inputs.imageUrl || ""}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="summary" className={styles.labelStyle}>
                    Additional information:
                </label>
                <textarea value={inputs.summary || ""} name="summary"
                 id="summary" onChange={handleChange} />
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}
