"use client";
import { useEffect } from "react";

//qchat widget
export default function AuroraWidget() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://app.linkaurora.com/widget.js";
    script.setAttribute(
      "data-assistant",
      "86d196e1-ae0f-48b5-87cf-1a0c75e7195b",
    );

    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
