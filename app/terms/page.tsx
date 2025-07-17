import Navbar from "../navbar";
import Footer from "../footer";

const Terms = () => (
  <div>
    <Navbar />
    <div className="pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16 min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="space-y-8 text-[#7b7b7b] text-lg max-w-3xl">
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-black">1. Introduction</h2>
          <p>Welcome to Aarambh Works. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-black">2. Services</h2>
          <p>Aarambh Works provides creative services including digital marketing, branding, web development, commercial shoots, graphic design, and content creation. All services are subject to availability and may be modified at any time.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-black">3. User Responsibilities</h2>
          <p>Users agree to provide accurate information, respect intellectual property, and not misuse our services. Any unauthorized use may result in termination of access.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-black">4. Intellectual Property</h2>
          <p>All content, trademarks, and media on this website are the property of Aarambh Works or its licensors. You may not copy, reproduce, or distribute any content without permission.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-black">5. Disclaimers</h2>
          <p>Our services are provided as is without warranties of any kind. Aarambh Works is not liable for any damages arising from the use of our website or services.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-black">6. Contact</h2>
          <p>For questions about these terms, contact us at <a href="mailto:customercareofaarambh@gmail.com" className="underline">customercareofaarambh@gmail.com</a>.</p>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);

export default Terms; 
