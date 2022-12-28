import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'


export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Lustria&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-4JFVNZKGH2"></script>
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-4JFVNZKGH2');
                     `}
                </Script>

            </Head>
            {/*             <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6048208143250747"
                crossOrigin="anonymous"
            ></script> */}

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}