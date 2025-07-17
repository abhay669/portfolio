import Navbar from "../navbar";
import Footer from "../footer";

const Privacy = () => (
  <div>
    <Navbar />
    <div className="pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16 min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="space-y-8 text-[#7b7b7b] text-lg max-w-3xl">
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-black">1. Information We Collect</h2>
          <p>We collect information you provide directly, such as your name, email, and project details, as well as data collected automatically through cookies and analytics tools.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-black">2. Use of Information</h2>
          <p>Your information is used to provide and improve our services, communicate with you, and ensure the security of our website.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-black">3. Cookies</h2>
          <p>We use cookies to enhance your experience and analyze site usage. You can control cookies through your browser settings.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-black">4. Third-Party Services</h2>
          <p>We may use third-party services for analytics, marketing, or payment processing. These providers have their own privacy policies.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-black">5. Your Rights</h2>
          <p>You have the right to access, update, or delete your personal information. Contact us to exercise these rights.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-black">6. Contact</h2>
          <p>For privacy questions, contact us at <a href="mailto:customercareofaarambh@gmail.com" className="underline">customercareofaarambh@gmail.com</a>.</p>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);

export default Privacy; 
