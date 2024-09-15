const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="bg-gray-100 py-10">
        <h1 className="text-center text-4xl font-extrabold text-blue-600 mb-6">
          About <span className="text-red-500">Us</span>
        </h1>
        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto">
          Welcome to our
          <span className="text-red-500 font-semibold"> Fake</span>-
          <span className="text-blue-500 font-semibold">store</span>! We aim to
          offer the best products at the most competitive prices. Our goal is to
          ensure a fantastic shopping experience for all our customers.
        </p>
      </section>

      {/* Content Section */}
      <section className="py-10 px-6 md:px-20 lg:px-40">
        <article className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are passionate about providing top-quality products to our
            customers and delivering excellent service. From electronics to
            fashion, our store covers a wide range of categories with the latest
            trends and styles. Our mission is to empower customers by offering
            them access to the products they love.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            quos quo optio soluta cumque, voluptas saepe cum modi aspernatur
            dignissimos. We believe that e-commerce should be easy, fast, and
            accessible to everyone. That’s why we are constantly innovating our
            platform to offer the best user experience.
          </p>
        </article>

        <article className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our journey began with a small online store, and thanks to the trust
            of our amazing customers, we’ve grown into a trusted brand. We are
            committed to continuing to provide high-quality products and an
            exceptional shopping experience for years to come.
          </p>
        </article>
      </section>

      {/* Team Section */}
      <section className="bg-blue-50 py-10">
        <h2 className="text-center text-3xl font-bold text-blue-600 mb-6">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="team-member max-w-xs p-4 bg-white shadow-md rounded-lg text-center">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
            />
            <h3 className="text-lg font-bold text-gray-800">John Doe</h3>
            <p className="text-sm text-gray-500">CEO & Founder</p>
          </div>

          <div className="team-member max-w-xs p-4 bg-white shadow-md rounded-lg text-center">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
            />
            <h3 className="text-lg font-bold text-gray-800">Jane Smith</h3>
            <p className="text-sm text-gray-500">Chief Marketing Officer</p>
          </div>

          <div className="team-member max-w-xs p-4 bg-white shadow-md rounded-lg text-center">
            <img
              className="w-24 h-24 mx-auto rounded-full mb-4"
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
            />
            <h3 className="text-lg font-bold text-gray-800">Alex Johnson</h3>
            <p className="text-sm text-gray-500">Head of Operations</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 text-center bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="mb-6 text-lg">
          Be the first to know about the latest deals, new arrivals, and more.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Subscribe Now
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
