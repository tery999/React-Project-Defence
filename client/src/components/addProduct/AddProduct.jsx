import { useEffect, useState } from 'react';
import styles from "./AddProductForm.module.css"
import * as productService from "../../services/productService"

export default function AddProduct() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
        productService.create(inputs);
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
                <label htmlFor='category' className={styles.labelStyle}>Category:
                    <input
                        type="text"
                        name="category"
                        id="category"
                        value={inputs.category || ""}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='price' className={styles.labelStyle}>Price:
                    <input
                        type="number"
                        name="price"
                        id="price"
                        value={inputs.price || ""}
                        onChange={handleChange}
                    />
                </label>
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
                <textarea value={inputs.summary || ""} name="summary" id="summary" onChange={handleChange} />
                <div>
                <input type="submit" />
                </div>
            </form>
        </div>
    )
}
