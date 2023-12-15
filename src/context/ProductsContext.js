import { useState, createContext } from "react"

export const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {
  const [category, setCategory] = useState(null)
  const handleSetCategory = (id) => {
    setCategory(id)
  }
  const handleClearCategory = () => {
    setCategory(null)
  }
  return (
    <ProductsContext.Provider value={{ handleSetCategory, handleClearCategory, category }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider