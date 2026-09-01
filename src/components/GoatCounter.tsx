"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    goatcounter?: {
      count: (opts?: { path?: string }) => void;
    };
  }
}

/** Counts client-side navigations; the first pageview is handled by GoatCounter's onload. */
export function GoatCounter() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    window.goatcounter?.count?.({
      path: location.pathname + location.search + location.hash,
    });
  }, [pathname]);

  return null;
}
