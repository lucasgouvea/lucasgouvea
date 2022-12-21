import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                {/*                 <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Radio+Canada:wght@600&display=swap" rel="stylesheet" /> */}
                <link rel="icon" href="/favicon.ico" />
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