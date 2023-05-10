import { createContext, useState } from "react"

export const CustomContext = createContext();

const CustomProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (itemId, itemQuantity) => {
        // Si el item ya existe en el carrito, actualiza su cantidad
        if (cartItems.some((item) => item.id === itemId)) {
            const updatedCartItems = cartItems.map((item) => {
            if (item.id === itemId) {
                return { id: itemId, quantity: itemQuantity };
            }
            return item;
            });
            setCartItems(updatedCartItems);
        } else {
            // Si el item no existe en el carrito, lo agrega
            setCartItems([...cartItems, { id: itemId, quantity: itemQuantity }]);
        }
    };

    return (
        <CustomContext.Provider value={{ cartItems, addToCart }}>
        {children}
        </CustomContext.Provider>
    )
}

export default CustomProvider