import Carousel from "@/app/components/ui/carousel";
import Slider from "@/app/components/ui/slider";
import SlideShow from "@/app/components/ui/slideshow";
import Ticker from "@/app/components/ui/ticker";
import React from "react";

const Home = () => {
  return (
    <main id="home">
      <header id="first-impression" className="page-section">
        <div className="info-section">
          <h2>Transforming Real Estate Dreams into Reality</h2>
          <button id="explore" className="learn-more class-1">
            Explore Properties
          </button>
          <button id="learn" className="learn-more class-1">
            Learn About Our Services
          </button>
        </div>
        {/* <div className="media-section">
          <div>
            Background Image/Video: High-quality visuals of luxury homes,
            commercial spaces, or vibrant developments
          </div>
        </div> */}
      </header>
      <section id="featured-services" className="stacked page-section">
        <div className="info-section">
          <h2>Explore Our Services</h2>
          <h4>
            A short intro about SDS Property Group’s commitment to excellence in
            real estate
          </h4>
        </div>
        <div className="media-section">
          <ul id="key-services" className="flex-cards">
            <li className="service-card card">
              Residential & Commercial Real Estate{" "}
              <button className="learn-more class-1">Learn More</button>
            </li>
            <li className="service-card card">
              Investments{" "}
              <button className="learn-more class-1">Learn More</button>
            </li>
            <li className="service-card card">
              Colony Development{" "}
              <button className="learn-more class-1">Learn More</button>
            </li>
            <li className="service-card card">
              Mortgage Assistance{" "}
              <button className="learn-more class-1">Learn More</button>
            </li>
          </ul>
        </div>
      </section>
      <section
        id="property-listings"
        className="alternating-reverse page-section"
      >
        <div className="info-section">
          <h2>Featured Properties for Sale</h2>
        </div>
        <div className="media-section">
          <SlideShow infinite={true}>
            {Array.from([1, 2, 3]).map((_, i) => (
              <div className="property-slide slide">
                <h4>Slide {i + 1}</h4>
                <img src="" alt="property-image" />
                <p id="location">Location</p>
                <ul className="key-features">
                  <li className="key-feature">1</li>
                  <li className="key-feature">2</li>
                  <li className="key-feature">3</li>
                </ul>
                <button className="learn-more class-1">View Details</button>
              </div>
            ))}
          </SlideShow>
        </div>
      </section>
      <section id="why-choose-us" className="alternating page-section">
        <div className="info-section">
          <h2>Why SDS Property Group?</h2>
          <h4>
            A few sentences on expertise, market insights, and tailored
            solutions
          </h4>
        </div>
        <div className="media-section">
          <Slider infinite={true}>
            {Array.from([1, 2, 3, 4, 5]).map((_, i) => (
              <div className="choose-slide slide">
                <ul className="differentiators">
                  <li className="key-feature">Personalized Services</li>
                  <li className="key-feature">
                    End-to-End Real Estate Solutions
                  </li>
                  <li className="key-feature">
                    Expert Guidance for NRI Investors
                  </li>
                  <li className="key-feature">Proven Track Record</li>
                </ul>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section id="client-testimonials" className="stacked page-section">
        <div className="info-section">
          <h2>What Our Clients Say</h2>
        </div>
        <div className="media-section">
          <Ticker infinite={true}>
            {Array.from([1, 2, 3, 4, 5]).map((_, i) => (
              <div className="review-slide slide">
                <h4>Client Review {i + 1}</h4>
              </div>
            ))}
          </Ticker>
        </div>
      </section>
      <section id="news-insights" className="stacked page-section">
        <div className="info-section">
          <h2>Latest Insights & News</h2>
          <p>
            Share updates on real estate trends, investment tips, or company
            milestones. Include a few blog post previews with "Read More" links.
          </p>
        </div>
        <div className="media-section">
          <Carousel infinite={true}>
            {Array.from([1, 2, 3, 4, 5]).map((_, i) => (
              <div className="news-card card">
                <h4>News Article {i + 1}</h4>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <section id="call-to-action" className="alternating page-section">
        <div className="info-section">
          <h2>Looking for the perfect property? Let us help you find it!</h2>
          <button className="learn-more class-1">
            Schedule a Consultation
          </button>
          <button className="learn-more class-1">Browse All Properties</button>
        </div>
        <div className="media-section">
          <div className="contact-form">
            <p>Contact Form</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
