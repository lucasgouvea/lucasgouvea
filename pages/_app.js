import ".";
import '../styles/globals.css';
import Navbar from "../shared/navbar/navbar";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <div>
                <main>
                    <Navbar />
                    <Component {...pageProps} />
                </main>
            </div>
        </>
    );
}

export default MyApp;