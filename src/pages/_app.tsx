import type { AppProps } from 'next/app'
import {Layout} from "@/pages/components/layout/Layout";
import '@/styles/globals.scss'
import Script from "next/script";
import {Footer} from "@/pages/components/layout/Footer";



export default function App({ Component, pageProps }: AppProps) {



  return (
      <>
          <Layout>
              <Component {...pageProps} />
          </Layout>
          <Script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.js" />
      </>
  )
}
