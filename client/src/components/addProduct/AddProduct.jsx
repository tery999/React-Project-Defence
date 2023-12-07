import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"
import styles from "./AddProductForm.module.css"
import * as productService from "../../services/productService"
import * as errorService from "../../services/errorService"

export default function AddProduct() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        category: "",
        price: "",
        condition: "",
        summary: ""
    });
    const [error, setError] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit =async(event) => {
        event.preventDefault();

        const validationErrors = errorService.addProductValidation(inputs);
        setError(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            if (inputs.imageUrl === "" || inputs.imageUrl === undefined) {
                inputs.imageUrl = "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg";
            }

            await  productService.create(inputs);
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
                        placeholder="Enter product...."
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
                        placeholder="Enter category...."
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
                        placeholder="Enter price...."
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
                        <option value="" disabled selected  hidden>Condition....</option>
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
                        placeholder="Provide image link...."
                        value={inputs.imageUrl || ""}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="summary" className={styles.labelStyle}>
                    Additional information:
                </label>
                <textarea value={inputs.summary || ""} name="summary" 
                placeholder="Additional information...&#10;*Not required&#10;"
                id="summary" onChange={handleChange} />
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}
