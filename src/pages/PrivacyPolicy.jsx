import React from "react";
import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-20">
      <section className="bg-gray-100 py-10">
        <h1 className="text-center text-4xl font-extrabold text-blue-600 mb-6">
          Privacy <span className="text-red-500">Policy 📃</span>
        </h1>
      </section>
      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          1. Introduction
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Welcome to <span className="text-red-500 font-semibold">Fake</span>-
          <span className="text-blue-500 font-semibold">store</span>! This
          Privacy Policy explains how we collect, use, and protect your personal
          information when you visit our website or use our services. By
          accessing or using our website, you agree to this Privacy Policy.
        </p>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          2. Information We Collect
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We may collect the following types of information:
        </p>
        <ul className="text-gray-600 text-lg  list-disc ml-6 mt-4">
          <li className="mb-2">
            Personal identification information (Name, email address, phone
            number, etc.)
          </li>
          <li className="mb-2">
            Payment information (credit card details, billing address, etc.)
          </li>
          <li className="mb-2">
            Usage data (IP address, browser type, pages visited, etc.)
          </li>
        </ul>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          3. How We Use Your Information
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We use the information we collect to:
        </p>
        <ul className="text-gray-600 text-lg  list-disc ml-6 mt-4">
          <li className="mb-2">Process transactions and manage your orders</li>
          <li className="mb-2">
            Send marketing emails, updates, and promotions
          </li>
          <li className="mb-2">Improve our services and customer experience</li>
        </ul>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          4. Sharing Your Information
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We do not sell, trade, or rent your personal information to others.
          However, we may share your information with third-party service
          providers who assist us in operating our website, processing payments,
          or conducting business operations.
        </p>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          5. Data Security
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We implement appropriate security measures to protect your personal
          data from unauthorized access, disclosure, or destruction. However, no
          method of transmission over the internet or electronic storage is 100%
          secure.
        </p>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          6. Your Rights
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          You have the right to access, update, or delete your personal
          information. You can also opt out of receiving marketing
          communications by following the unsubscribe instructions in any email
          we send.
        </p>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          7. Changes to This Privacy Policy
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date.
        </p>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          8. Contact Us
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          If you have any questions about our Return Policy, feel free to
          contact us:
          <br />
          Email: fakestore@fakestore.com
          <br />
          Phone: (+91) 9876543210
        </p>
        <Link to="/contact" className="text-blue-600 font-semibold">
          Contact-us 🔗
        </Link>
      </section>
    </div>
  );
};
export default PrivacyPolicy;
