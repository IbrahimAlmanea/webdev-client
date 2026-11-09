import { Suspense } from "react";
import QueryCalculator from "../path-params/[a]/[b]/page";

export default function QueryCalculatorPage() {
  return (
    <Suspense fallback={<p>Loading calculator…</p>}>
      <QueryCalculator />
    </Suspense>
  );
}