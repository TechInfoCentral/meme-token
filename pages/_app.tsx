import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import GlobalProvider from "@/context/GlobalProvider";

export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready ? (
        <GlobalProvider>
          <Component {...pageProps} />
        </GlobalProvider>
      ) : null}
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
