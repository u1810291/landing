import Script from 'next/script'
import React from 'react'

const YANDEX_TRACKING_ID = process.env.NEXT_PUBLIC_YANDEX_TRACKING_ID

export default function Yandex() {
  return (
    <>
      {/* Yandex analytics */}
      <Script
        id="yandex-metrica"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){
                    (m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],
                    k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(${YANDEX_TRACKING_ID}, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
          `,
        }}
      />
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${YANDEX_TRACKING_ID}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  )
}
