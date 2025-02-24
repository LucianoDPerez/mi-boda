import Footer from "@/components/Footer";
import Galeri from "@/components/Galeri";
import Hero from "@/components/Hero";
import GuestLayout from "@/components/Layouts/GuestLayout";
import Lokasi from "@/components/Lokasi";
import Mempelai from "@/components/Mempelai";
import Tanggal from "@/components/Tanggal";
import Words from "@/components/Words";
import DownArrowIndicator from "@/components/Utils/DownArrowIndicator";

import Backsound from "@/components/Backsound";

/** _Home page_
 * @returns React.ReactElement
 */
const Home = () => {
    return (
        <GuestLayout>
            <Backsound/>
            <DownArrowIndicator/>
            <section id="hero">
                <Hero/>
            </section>
            <section id="words">
                <Words/>
            </section>
            <section id="mempelai">
                <Mempelai/>
            </section>
            <section id="tanggal">
                <Tanggal/>
            </section>
            <section id="lokasi">
                <Lokasi/>
            </section>
            <section id="galeri">
                <Galeri/>
            </section>
            <footer id="footer">
                <Footer/>
            </footer>
        </GuestLayout>
    );
};

export default Home;