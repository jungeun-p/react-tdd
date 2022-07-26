import React from "react";
import Calculator from "./Calc/Calculator";
import { OrderContextProvider } from "./contexts/OrderContext";
import OrderPage from "./pages/OrderPage/OrderPage";
import SummaryPage from "./pages/SummaryPage/SummaryPage";

function App() {

  return (
    <div style={{ padding: "4rem" }}>
      <OrderContextProvider>
        <OrderPage />
        <SummaryPage />
      </OrderContextProvider>
    </div>
  );
}

export default App;
