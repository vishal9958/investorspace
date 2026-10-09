"use client";

import { useEffect } from "react";

export default function PageTitle({ title }: { title: string }) {
  useEffect(() => {
    document.title = title ? `${title} | Investor Space` : "Investor Space";
  }, [title]);
  return null;
}
