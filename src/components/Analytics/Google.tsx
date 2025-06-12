import React from 'react'
import Script from 'next/script'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

export default function Google() {
  return (
    <>
      {/* Google analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `,
        }}
      />
    </>
  )
}
