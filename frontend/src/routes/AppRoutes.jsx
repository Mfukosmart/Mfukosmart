import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

import Dashboard from "../pages/dashboard/Dashboard";

// Products
import Products from "../pages/products/Products";
import AddProduct from "../pages/products/AddProduct";
import EditProduct from "../pages/products/EditProduct";
import Categories from "../pages/products/Categories";
import Suppliers from "../pages/products/Suppliers";

// Sales
import Sales from "../pages/sales/Sales";
import SalesHistory from "../pages/sales/SalesHistory";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />
        </Route>

        {/* Dashboard */}
        <Route element={<DashboardLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* Sales */}
          <Route
            path="/sales"
            element={<Sales />}
          />

          <Route
            path="/sales/history"
            element={<SalesHistory />}
          />

          {/* Products */}
          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/products/new"
            element={<AddProduct />}
          />

          <Route
            path="/products/edit/:id"
            element={<EditProduct />}
          />

          <Route
            path="/categories"
            element={<Categories />}
          />

          <Route
            path="/suppliers"
            element={<Suppliers />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}