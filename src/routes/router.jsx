import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import ProductDetails from "../features/products/ProductDetails";
import Cart from "../pages/Cart";
import AboutUs from "../pages/AboutUs";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />} >
            <Route index element={<HomePage />} />
            <Route path="category/:CategoryName" element={<CategoryPage />} />
            <Route path="product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/aboutus" element={<AboutUs />} />
        </Route>    
    )
);  