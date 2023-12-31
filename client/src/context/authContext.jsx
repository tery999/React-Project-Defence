import { createContext, useState, useCallback , useEffect} from "react";
import { useNavigate } from "react-router";
import * as userService from "../services/userService";

export const AuthContext = createContext();

export const ContextProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(()=>{
        // debugger;
        const locStrToken = localStorage.getItem("accessToken");
        const locStrEmail = localStorage.getItem("email");
        const locStrId = localStorage.getItem("_id");

        if ( locStrEmail && locStrToken) {
            return {email: locStrEmail , accessToken: locStrToken , _id: locStrId};
        }
        return {};
    })
    const [cart, setCart] = useState([]);

    const loginHandler = useCallback(async (values) => {
        try {
            const result = await userService.login(values.email, values.password)
            setAuth(result);
            localStorage.setItem("accessToken", result.accessToken)
            localStorage.setItem("email", result.email)
            localStorage.setItem("_id", result._id)
            navigate("/");
        } catch (err) {
            console.log(`THIS IS THE ERROR ${err}`)
            throw Error("ERRPR AT LOGIN HANDLER", { err });
        }
    }, []);

    const registerHandler = useCallback(async (values) => {
        try {
            const result = await userService.register(values.email, values.password);
            console.log(result);
            setAuth(result);
            if (result.accessToken !== undefined) {
                localStorage.setItem("accessToken", result.accessToken)
                localStorage.setItem("email", result.email)
                localStorage.setItem("_id", result._id)
            }
            navigate("/");
        } catch (err) {
            console.log(`ERROR AT REGISTER HANDLER`);
            throw Error(err);
        }
    }, []);

    const logoutHandlder = useCallback(() => {
        setAuth({});
        setCart([]);
        localStorage.removeItem("accessToken")
        localStorage.removeItem("email")
        localStorage.removeItem("_id")
        navigate("/");
    }, []);


    const cartBuyHandler = useCallback((product) => {
        // debugger;
        const productExists = cart.some(prod => {
            if (prod.product.name === product.name) {
                return true;
            } else {
                return false;
            }
        });
        console.log("FINAL IS ", productExists);
        if (productExists === false) {
            setCart(cart => [...cart, { product }]);
        }
    }, [cart]);

    const DoesProductExistInCart = (product) => {
        if (cart.length === 0) {
            return false;
        }
        const productExists = cart.some(prod => {
            if (prod.product.name === product.name) {
                console.log("Product already exists 2")
                return true;
            } else {
                console.log("Product doesnt exist 2")
                return false;
            }
        });

        return productExists;
    };

    const removeProductCartHandler = useCallback((prodId) => {
        // debugger;
        const filteredProducts = cart.filter((item) => item.product._id !== prodId);
        setCart(filteredProducts);
    });


    useEffect(() => {
        console.log(cart)
    }, [cart]);

    const values = {
        cart,
        loginHandler,
        registerHandler,
        logoutHandlder,
        cartBuyHandler,
        DoesProductExistInCart,
        removeProductCartHandler,
        email: auth?.email ?? null,
        userId: auth?._id ?? null, 
        isLogged: !!auth?.email 
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );

}