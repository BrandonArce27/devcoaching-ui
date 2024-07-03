import { FC } from "react";

import type { AppProps } from "next/app";

import { Provider } from "@/shared/config/provider";

import "@/styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
