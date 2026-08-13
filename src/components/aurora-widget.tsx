"use client";
import { useEffect } from "react";

//qchat widget
export default function AuroraWidget() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://staging.qchat.qodari.com/widget.js";
    script.setAttribute(
      "data-assistant",
      "0dcccb54-fc31-497c-80f5-04fb0b3c793d",
    );

    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
