import { BrowserRouter, Routes, Route } from "react-router-dom"
import Private from "./admin/components/private"
import All_Access from "./admin/components/all_access"
import Home from "./pages/home"
import Products from "./pages//products"
import Product_Details from "./pages/product_details"
import Checkout from "./pages/checkout"
import Contact_Us from "./pages/contact_us"
import About_Us from "./pages/about_us"
import Login from "./pages/login"
import Requests from "./admin/pages/requests"
import Request from "./admin/pages/request"
import List_Products from "./admin/pages/list_products"
import Add_Products from "./admin/pages/add_product"
import Update_Products from "./admin/pages/update_product"
import Product_info from "./admin/pages/product_info"
import Error404 from "./pages/error404"
import { Toaster } from 'sonner'


function App() {

  return (<>
    <Toaster position="bottom-left" richColors expand={true} />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product_details/:product" element={<Product_Details />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact_us" element={<Contact_Us />} />
        <Route path="/about_us" element={<About_Us />} />
        <Route path="/admin" element={<Login />} />
        <Route element={<Private />} >
          <Route path="/admin/requests" element={<Requests />} />
          <Route path="/admin/request/:request" element={<Request />} />
          <Route element={<All_Access />}>
            <Route path="/admin/list_products" element={<List_Products />} />
            <Route path="/admin/product_info/:product" element={<Product_info />} />
            <Route path="/admin/add_product" element={<Add_Products />} />
            <Route path="/admin/update_product/:product" element={<Update_Products />} />
          </Route>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
