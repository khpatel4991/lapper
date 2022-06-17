import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { DebugObserver } from "../components/debugobserver";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <DebugObserver />
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-rose-400 py-6 sm:py-12">
        <div className="absolute inset-0 bg-rose-900 bg-center"></div>
        <div className="relative mx-auto px-6 pt-10 pb-8 sm:max-w-lg sm:rounded-lg sm:px-10">
          <Component {...pageProps} />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
