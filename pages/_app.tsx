import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { FunctionComponent } from "react";

interface CustomAppProps extends AppProps {
  Component: FunctionComponent; // Ensuring Component is a valid React Function Component
}

export default function App({ Component, pageProps }: CustomAppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          style: {
            border: "1px solid #713200",
            padding: "5px",
            color: "#713200",
            fontFamily: "Space Mono",
            fontWeight: 500,
            fontSize: "16px",
          },
        }}
      />
    </>
  );
}
