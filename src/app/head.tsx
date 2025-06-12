import Script from "next/script"

const GA_TRACKING_ID = process.env.GA_TRACKING_ID

export default function Head() {
  return (
    <>
      <title>Fajr Soft</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Outsourcing Software Development Company 2025 ⭐️FajrSoft⭐️ Best Outsource & Offshore Development Team & Services: ✔️ Web ✔️ Application ✔️ Software." />
      <meta property="og:title" content="Software Development Agency | Outsourcing Development | FajrSoft" />
      <meta property="og:description" content="Outsourcing Software Development Company 2023 ⭐️FajrSoft⭐️ Best Outsource &amp; Offshore Development Team &amp; Services: ✔️ Web ✔️ Application ✔️ Software." />
      <link rel="icon" href="/images/favicon.ico" />
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
  );
}
