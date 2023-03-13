import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import localFont from "next/font/local";

const calSans = localFont({
  src: "../../public/fonts/CalSans.woff2",
  variable: "--cal-sans",
  display: "swap",
});

const matter = localFont({
  src: [
    {
      path: "../../public/fonts/Matter-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className={`${calSans.variable} ${matter.className} antialiased`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
