import { useEffect, useState } from 'react';
import styles from "../../../css/AddProductForm.module.css"

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
    }

    return (
        <div className={styles.DivProduct}>
            <form className={styles.AddProductForm} onSubmit={handleSubmit}>
                <label htmlFor='name'>Product name:
                    <input
                        type="text"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='category'>Category:
                    <input
                        type="text"
                        name="category"
                        value={inputs.category || ""}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='price'>Price:
                    <input
                        type="number"
                        name="price"
                        value={inputs.price || ""}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="condition">
                    Condition:
                </label>
                <select value={inputs.condition || ""} name="condition" onChange={handleChange}>
                    <option value="New">New</option>
                    <option value="Minor Use">Minor Use</option>
                    <option value="Used">Used</option>
                    <option value="Bad">Bad</option>
                </select>
                <label htmlFor="summary">
                    Additional information:
                </label>
                <textarea value={inputs.summary || ""}  name="summary" onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    )
}
