import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const OverviewPage = React.lazy(() => import("./pages/OverviewPage"));
const ProductsPage = React.lazy(() => import("./pages/ProductsPage"));
const UsersPage = React.lazy(() => import("./pages/UsersPage"));
const SalesPage = React.lazy(() => import("./pages/SalesPage"));
const OrdersPage = React.lazy(() => import("./pages/OrdersPage"));
const AnalyticsPage = React.lazy(() => import("./pages/AnalyticsPage"));
const SettingsPage = React.lazy(() => import("./pages/SettingsPage"));

function App() {
  return (
    <div className={`flex h-screen bg-gray-800 text-white overflow-hidden`}>
      <Sidebar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
