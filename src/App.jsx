import CTA from "./components/CTA";
import DownloadSection from "./components/DownloadSection";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Tabs from "./components/Tabs";

function App() {
    return (
        <>
            <div className="max-w-7xl mx-auto lg:px-10 md:px-8 px-6 overflow-x-hidden">
                <Header />
                <HeroSection />
                <Tabs />
                <DownloadSection />
                <FAQs />
            </div>
            <CTA />
            <Footer />
        </>
    );
}

export default App;
