import { Suspense } from "react";
import ProductsClient from "../../components/ProductsClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    
      <ProductsClient/>
    </Suspense>
  );
}