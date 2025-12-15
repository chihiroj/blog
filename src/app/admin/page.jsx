import Head from "next/head";
import Script from "next/script";

export default function AdminPage() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex" />
        <title>Content Manager</title>
      </Head>
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        async
      />
      <Script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js" async></Script>
      <main id="cms" />
    </>
  )
}