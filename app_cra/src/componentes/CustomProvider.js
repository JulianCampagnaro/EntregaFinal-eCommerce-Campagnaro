import { createContext, useState } from "react"

export const CustomContext = createContext();

const CustomProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (itemId, itemQuantity) => {
        if (cartItems.some((item) => item.id === itemId)) {
            const updatedCartItems = cartItems.map((item) => {
            if (item.id === itemId) {
                return { id: itemId, quantity: itemQuantity };
            }
            return item;
            });
            setCartItems(updatedCartItems);
        } else {
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