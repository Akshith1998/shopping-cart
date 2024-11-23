import { lazy, Suspense } from "react";
import "./styles.css";
const ShoppingCart = lazy(()=>import("./ShoppingCart"));
import { shoppingItems } from "./data";

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>...Loading</div>}>
        <ShoppingCart items={shoppingItems} />
      </Suspense>
    </div>
  );
}
