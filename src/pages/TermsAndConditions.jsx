import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-20">
      <section className="bg-gray-100 py-10">
        <h1 className="text-center text-4xl font-extrabold text-blue-600 mb-6">
          Terms and
          <span className="text-red-500"> Conditions 📃</span>
        </h1>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          1. Introduction
        </h2>
        <p className="text-lg leading-relaxed">
          Welcome to <span className="text-red-500 font-semibold">Fake</span>-
          <span className="text-blue-500 font-semibold">store</span>! These
          Terms and Conditions outline the rules and regulations for the use of
          our website and services. By accessing or using this site, you agree
          to comply with these terms.
        </p>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          2. Intellectual Property
        </h2>
        <p className="text-lg leading-relaxed">
          The content, images, and all intellectual property on this website
          belong to [Your Company Name]. Unauthorized use of this content is
          prohibited.
        </p>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          3. Use of the Service
        </h2>
        <p className="text-lg leading-relaxed">
          By using our services, you agree not to:
        </p>
        <ul className="list-disc ml-6 mt-4">
          <li className="mb-2">Engage in any unlawful activity</li>
          <li className="mb-2">Distribute harmful software or viruses</li>
          <li className="mb-2">
            Attempt to gain unauthorized access to the site or services
          </li>
        </ul>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          4. Account Creation
        </h2>
        <p className="text-lg leading-relaxed">
          To use certain features of our services, you may be required to create
          an account. You are responsible for maintaining the confidentiality of
          your account information and for all activities under your account.
        </p>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          5. Payment and Pricing
        </h2>
        <p className="text-lg leading-relaxed">
          All payments for services or products must be made in accordance with
          the pricing details provided on our website. We reserve the right to
          change prices at any time without notice.
        </p>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          6. Limitation of Liability
        </h2>
        <p className="text-lg leading-relaxed">
          [Your Company Name] will not be held responsible for any damages that
          result from the use or inability to use our services or products,
          including any direct, indirect, or consequential losses.
        </p>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          7. Termination
        </h2>
        <p className="text-lg leading-relaxed">
          We reserve the right to terminate or suspend your account and access
          to our services at any time for violating these terms or engaging in
          prohibited activities.
        </p>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          8. Changes to Terms
        </h2>
        <p className="text-lg leading-relaxed">
          We reserve the right to update or modify these Terms and Conditions at
          any time. Continued use of our services after changes indicates your
          acceptance of the new terms.
        </p>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          9. Governing Law
        </h2>
        <p className="text-lg leading-relaxed">
          These terms are governed by and construed in accordance with the laws
          of [Your Country], and any disputes will be resolved in the courts of
          [Your Country].
        </p>
      </section>

      <section className="bg-blue-50 py-10">
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

export default TermsAndConditions;
