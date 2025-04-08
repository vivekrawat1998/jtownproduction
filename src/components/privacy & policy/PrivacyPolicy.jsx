import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white py-20 px-5 md:px-20 font-space relative">
      <img 
        src="/assets/background_01_home_02.jpg" 
        alt="privacy-bg" 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0 rounded-tr-[250px] rounded-bl-[250px]" 
      />
      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300">
          Privacy Policy
        </h1>

        <p className="text-lg leading-relaxed text-gray-200">
          At [Your NGO Name], we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-purple-300">1. Information We Collect</h2>
            <ul className="list-disc pl-5 text-gray-300">
              <li>Personal details (name, email, phone) when you contact us or donate</li>
              <li>Usage data like IP address, browser type, and visited pages</li>
              <li>Cookies to enhance user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-300">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 text-gray-300">
              <li>To improve our services and website experience</li>
              <li>To send updates, newsletters, or donation receipts</li>
              <li>To process donations securely</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-300">3. Data Protection</h2>
            <p className="text-gray-300">
              We implement strict security measures to protect your data. Your personal information is never shared, sold, or rented to third parties without consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-300">4. Third-Party Services</h2>
            <p className="text-gray-300">
              We may use third-party tools (e.g., payment gateways) which have their own privacy policies. We recommend reviewing their terms separately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-300">5. Cookies</h2>
            <p className="text-gray-300">
              Our website uses cookies for functionality and analytics. You can modify your browser settings to disable cookies at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-300">6. Your Rights</h2>
            <p className="text-gray-300">
              You have the right to access, update, or delete your personal data. Contact us if you have any concerns or requests regarding your privacy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-300">7. Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. All changes will be posted on this page with the updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-300">8. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at: <br />
              <span className="text-white font-medium">support@yourngo.org</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
