import React from "react";
import { Link } from "react-router-dom";

const ReturnPolicy = () => {
  return (
    <div className="container mx-auto px-20">
      <section className="bg-gray-100 py-10">
        <h1 className="text-center text-4xl font-extrabold text-blue-600 mb-6">
          Return <span className="text-red-500">Policy 📃</span>
        </h1>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          1. Overview
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At <span className="text-red-500 font-semibold">Fake</span>-
          <span className="text-blue-500 font-semibold">store</span>, we strive
          to provide the best shopping experience. If you are not completely
          satisfied with your purchase, we are here to help. Our return policy
          lasts [insert return window, e.g., 30 days]. If [return window] days
          have passed since your purchase, unfortunately, we can’t offer you a
          refund or exchange.
        </p>
      </section>

      <section className="bg-blue-50 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          2. Eligibility for Returns
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          To be eligible for a return, your item must be unused and in the same
          condition that you received it. It must also be in the original
          packaging. Certain items are exempt from being returned, such as:
        </p>
        <ul className="list-disc ml-6 mt-4">
          <li className="mb-2">Perishable goods (e.g., food, flowers)</li>
          <li className="mb-2">Downloadable software products</li>
          <li className="mb-2">Health and personal care items</li>
        </ul>
      </section>

      <section className="bg-blue-50 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          3. Process for Returns
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          To initiate a return, please follow these steps:
        </p>
        <ul className="list-decimal ml-6 mt-4">
          <li className="mb-2">
            Contact us at [your-email@example.com] to request a return.
          </li>
          <li className="mb-2">
            Provide your order number and reason for return.
          </li>
          <li className="mb-2">
            We will provide you with a return shipping label and instructions on
            how to send your item back to us.
          </li>
        </ul>
      </section>

      <section className="bg-blue-50 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          4. Refunds
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Once your return is received and inspected, we will send you an email
          to notify you of the approval or rejection of your refund. If
          approved, your refund will be processed, and a credit will
          automatically be applied to your original method of payment within [X]
          days.
        </p>
      </section>

      <section className="bg-blue-50 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          5. Exchanges
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We only replace items if they are defective or damaged. If you need to
          exchange it for the same item, send us an email at
          [your-email@example.com] and we will guide you through the process.
        </p>
      </section>

      <section className="bg-blue-50 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          6. Shipping for Returns
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          You will be responsible for paying your own shipping costs for
          returning your item unless the return is due to a defective product.
          Shipping costs are non-refundable.
        </p>
      </section>

      <section className="bg-blue-50 py-10">
        <h2 className="text-2xl font-semibold mb-4  text-blue-600 ">
          7. Non-Refundable Items
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Several types of goods are exempt from being returned, such as gift
          cards, downloadable software, and some health and personal care items.
          Sale items or gift cards are also non-refundable.
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

export default ReturnPolicy;
