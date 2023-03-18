import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from "../components/Footer";
import Head from "next/head";
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <Head>
      <title>Michael Hillcox</title>
      <meta
          name="description"
          content="Michael Hillcox, Full-Stack developer, Software Engineer, Web professional."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/fav/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/fav/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/fav/favicon-16x16.png" />
      <link rel="manifest" href="/assets/fav/site.webmanifest" />

      <meta name="keywords" content="ftb,feed the beast,ftb app,ftb launcher,feed the beast app,ftb modpack,modpack,minecraft,minecraft modpack,ftb mod,mods,stoneblock,skyblock,ftb minecraft,revelations,ftb revelations,ftb help,ftb support,ftb wiki,feed the beast wiki,ftb download,feed the beast download,feed the beast servers,ftb servers,infinity evolved"/>

      <meta key="og:title" property="og:title" content="Michael Hillcox" />
      <meta key="og:site_name" property="og:site_name" content="Michael Hillcox" />
      <meta key="og:url" property="og:url" content="https://michaelhillcox.com" />
      <meta key="og:image" property="og:image" content="https://michaelhillcox.com/assets/share-logo.png" />
      <meta key="og:image:width" property="og:image:width" content="1200" />
      <meta key="og:image:height" property="og:image:height" content="630" />
      <meta key="og:description" property="og:description" content="Michael Hillcox, Full-Stack developer, Software Engineer, Web professional." />
      <meta key="og:type" property="og:type" content="website" />

      <meta key="twitter:card" name="twitter:card" content="summary" />
      <meta key="twitter:site" name="twitter:site" content="https://michaelhillcox.com" />
      <meta key="twitter:title" name="twitter:title" content="Michael Hillcox" />
      <meta key="twitter:description" name="twitter:description" content="Michael Hillcox, Full-Stack developer, Software Engineer, Web professional." />
      <meta key="twitter:image" name="twitter:image" content="https://michaelhillcox.com/assets/share-logo.png" />
      <meta key="twitter:image:alt" name="twitter:image:alt" content="michaelhillcox.com" />
    </Head>
    <Component {...pageProps} />
    <Footer />
  </div>;
}
