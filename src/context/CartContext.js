import { useState, createContext } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false)

  const handleOpenCart = () => {
    setOpenCart(true)
  }
  const handleCloseCart = () => {
    setOpenCart(false)
  }

  return (
    <CartContext.Provider value={{ openCart, handleOpenCart, handleCloseCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider