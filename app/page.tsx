import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DemoPreview from "@/components/DemoPreview";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="pb-24">
            <div className="fixed top-0 left-0 right-0 z-50 bg-primary-bg py-6 text-center border-b border-primary-accent/20">
                <h1 className="text-3xl font-black tracking-tight">NAPKIN</h1>
            </div>
            <div className="pt-20">
                <Hero />
                <DemoPreview />
                <Features />
                <HowItWorks />
                <CTA />
                <Footer />
            </div>
            <Navbar />
        </main>
    );
}
