import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import OrderPage from "./components/pages/order/OrderPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/order" element={<OrderPage />} />
    </Routes>
  </BrowserRouter>
);
