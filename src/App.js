import React from "react";
import Calculator from "./Calc/Calculator";
import OrderPage from "./pages/OrderPage/OrderPage";
import SummaryPage from "./pages/SummaryPage/SummaryPage";

function App() {

  return (
    <div style={{ padding: "4rem" }}>
      <OrderPage />
      <SummaryPage />
    </div>
  );
}

export default App;
