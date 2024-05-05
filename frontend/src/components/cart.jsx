/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { removeItem, updateQuantity } from "../redux/cart/cartSlice"
import { toast } from "sonner"

const Cart = ({product}) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(product?.quantity)

  const handleChange = (e) => {
    const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1
    setQuantity(value)
  }

  const handleRemove = () => {
      dispatch(removeItem({ _id: product?._id}))
      toast.success("Product Deleted Successfully")
  }

  useEffect(() => {
      dispatch(updateQuantity({ _id: product?._id, quantity}))
  }, [quantity, product?._id, dispatch])

  return (
    <tr className="border-b border-green-500">
      <td className="py-1">
        <div className="flex items-center">
          <img className="h-14 md:h-20 w-14 md:w-20 mr-4" src={product.image} alt="Product image" />
          <span className="font-semibold text-sm md:text-md">{product.title}</span>
        </div>
      </td>
      <td className="py-5 flex justify-center">
        <div className="flex items-center">
          <button onClick={() => { if (quantity > 1) { setQuantity(pre => pre - 1) } }} className="border rounded-md py-1 md:py-2 px-3 md:px-4 mr-1.5 md:mr-2">-</button>
          <input type="number" value={quantity} className="text-center w-4 md:w-12" onChange={handleChange} />
          <button onClick={() => setQuantity(pre => pre + 1)} className="border rounded-md py-1 md:py-2 px-3 md:px-4 ml-1.5 md:ml-2">+</button>
        </div>
      </td>
      <td className="">
        <button onClick={handleRemove}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 md:w-5 h-4 md:h-5">
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" fill="red"/>
          </svg>
        </button>
      </td>
    </tr>
  )
}

export default Cart