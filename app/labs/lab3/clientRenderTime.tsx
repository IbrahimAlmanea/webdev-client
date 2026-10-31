"use client";

import { useRouter } from "next/navigation"

export default function ClientRenderTime() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.refresh()}>Refresh from client</button>
    </div>
  );
}