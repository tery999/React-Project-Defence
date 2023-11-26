import { useParams } from "react-router-dom";
import * as ProductService from "../../services/productService"
import { useEffect, useState } from "react";


export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        ProductService.getOne(id)
            .then(setProduct)
    }, [id])

    return (
        <div className="ProductDetails">
            <h2>{product.name}</h2>
            <img src={product.imageUrl} />
            <h2> Category: {product.category} </h2>
            <h2> Price: {product.price} $</h2>
            <h2> Condition: {product.condition}</h2>
            <h2> Information: {product.summary}</h2>
        </div>
    );
}