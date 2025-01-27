import Carousel from "@/app/components/ui/carousel";
import ContactForm from "@/app/components/ui/contact-form";
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
          <button id="explore" className="learn-more class-2">
            Explore Properties
          </button>
          <button id="learn" className="learn-more class-2">
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
            <li
              className="service-card card"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--card-color-1), var(--card-color-2)), url('/images/background-images/card-background-image-3.jpg')",
              }}
            >
              Residential & Commercial Real Estate{" "}
              <button className="learn-more class-1">Learn More</button>
            </li>
            <li
              className="service-card card"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--card-color-1), var(--card-color-2)), url('/images/background-images/card-background-image-4.jpg')",
              }}
            >
              Investments{" "}
              <button className="learn-more class-1">Learn More</button>
            </li>
            <li
              className="service-card card"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--card-color-1), var(--card-color-2)), url('/images/background-images/card-background-image-2.jpg')",
              }}
            >
              Colony Development{" "}
              <button className="learn-more class-1">Learn More</button>
            </li>
            <li
              className="service-card card"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--card-color-1), var(--card-color-2)), url('/images/background-images/card-background-image-1.jpg')",
              }}
            >
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
              <div
                className="property-slide slide"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--card-color-1), var(--card-color-2)), url('/images/background-images/slide-background-image-${
                    i + 1
                  }.jpg')`,
                }}
              >
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
            <div
              className="choose-slide slide"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--card-color-1), var(--card-color-2)), url('/images/background-images/slide-background-image-4.jpg')",
              }}
            >
              <h4>Personalized Services</h4>
            </div>
            <div
              className="choose-slide slide"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--card-color-1), var(--card-color-2)), url('/images/background-images/slide-background-image-5.jpg')",
              }}
            >
              <h4>End-to-End Real Estate Solutions</h4>
            </div>
            <div
              className="choose-slide slide"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--card-color-1), var(--card-color-2)), url('/images/background-images/slide-background-image-6.jpg')",
              }}
            >
              <h4>Expert Guidance for NRI Investors</h4>
            </div>
            <div
              className="choose-slide slide"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--card-color-1), var(--card-color-2)), url('/images/background-images/slide-background-image-7.jpg')",
              }}
            >
              <h4>Proven Track Record</h4>
            </div>
          </Slider>
        </div>
      </section>
      <section id="testimonials" className="stacked page-section">
        <div className="info-section">
          <h2>What Our Clients Say</h2>
        </div>
        <div className="media-section">
          <Ticker infinite={true}>
            {Array.from([1, 2, 3, 4, 5]).map((_, i) => (
              <div className="testimonial-slide slide">
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
              <div
                className="news-card card"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--card-color-1), var(--card-color-2)), url('/images/background-images/slide-background-image-${
                    7 + i
                  }.jpg')`,
                }}
              >
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
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Home;
