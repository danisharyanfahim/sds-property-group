import React from "react";

const Home = () => {
  return (
    <main id="home" className="page-section">
      <header id="first-impression">
        <h2>
          Transforming Real Estate Dreams into Reality
        </h2>
        <button id="explore" className="call-to-action">
          Explore Properties
        </button>
        <button id="learn" className="call-to-action">
          Learn About Our Services
        </button>
        <div>
          Background Image/Video: High-quality visuals of luxury homes, commercial spaces, or vibrant developments
        </div>
      </header>
      <section id="featured-services">
        <h2>
          Explore Our Services
        </h2>
        <h4>
          A short intro about SDS Property Group’s commitment to excellence in real estate
        </h4>
        {/* Key services */}
        <ul id="key-services" className="slide">
          <li className="service-card">Residenitial & Commercial Real Estate <button className="learn-more">Learn More</button></li>
          <li className="service-card">Investments <button className="learn-more">Learn More</button></li>
          <li className="service-card">Colony Development <button className="learn-more">Learn More</button></li>
          <li className="service-card">Mortgage Assistance <button className="learn-more">Learn More</button></li>
        </ul>
      </section>
      <section id="property-listings">
        <h2>Featured Properties for Sale</h2>
      </section>
      <div className="gallery">
        <div className="gallery-card">
          <img src="" alt="property-image" />
          <p id="location">Location</p>
          <ul className="key-features">
            <li className="key-feature">1</li>
            <li className="key-feature">2</li>
            <li className="key-feature">3</li>
          </ul>
          <button className="learn-more">View Details</button>
        </div>
      </div>
      <section id="why-choose-us">
        <h2>Why SDS Property Group?</h2>
        <h4>
          A few sentences on expertise, market insights, and tailored solutions
        </h4>
        <ul className="differentiators">
          <li className="key-feature">Personalized Services</li>
          <li className="key-feature">End-to-End Real Estate Solutions</li>
          <li className="key-feature">Expert Guidance for NRI Investors</li>
          <li className="key-feature">Proven Track Record</li>
        </ul>
      </section>
      <section id="client-testimonials">
        <h2>
          What Our Clients Say
        </h2>
        <div className="carousel">
          <div className="client-review-card">
            Client Review 1
          </div>
          <div className="client-review-card">
            Client Review 2
          </div>
          <div className="client-review-card">
            Client Review 3
          </div>
        </div>
      </section>
      <section id="call-to-action">
        <h3>
          Looking for the perfect property? Let us help you find it!
        </h3>
        <button className="learn-more">Schedule a Consultation</button>
        <button className="learn-more">Browse All Properties</button>
      </section>
      <section id="insights">
        <h3>Latest Insights & News</h3>
        <p>
          Share updates on real estate trends, investment tips, or company milestones. Include a few blog post previews with "Read More" links.
        </p>
      </section>
    </main>
  );
};

export default Home;
