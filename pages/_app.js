import ".";
import '../styles/globals.css';
import Navbar from "../shared/navbar/navbar";

function MyApp({ Component, pageProps }) {
    return (
        <main>
            <Navbar />
            <Component {...pageProps} />
        </main>
    );
}

export default MyApp;