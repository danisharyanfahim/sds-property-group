import Carousel from "@/app/components/ui/carousel";
import ContactForm from "@/app/components/ui/contact-form";
import Slider from "@/app/components/ui/slider";
import SlideShow from "@/app/components/ui/slideshow";
import Ticker from "@/app/components/ui/ticker";
import { list } from "aws-amplify/storage";
import React from "react";
import { BiMessageDetail, BiSolidBuildingHouse } from "react-icons/bi";
import { BsBuildingFill } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";
import { GiBanknote } from "react-icons/gi";
import { GrCatalog } from "react-icons/gr";
import { IoNewspaper } from "react-icons/io5";
import { RiMailFill } from "react-icons/ri";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { VscGraphLine } from "react-icons/vsc";

const servicesCardData: { title: string; icon: React.ReactNode }[] = [
  { title: "Colony Development", icon: <TfiRulerAlt2 /> },
  { title: "Mortgage Assistance", icon: <GiBanknote /> },
  { title: "Investments", icon: <VscGraphLine /> },
  {
    title: "Residential & Commercial Real Estate",
    icon: <BiSolidBuildingHouse />,
  },
];

const Home = () => {
  return (
    <main id="home">
      <header id="first-impression" className="page-section">
        <div className="info-section">
          <h1>
            Transforming <span className="gold-text">Real Estate</span> Dreams
            into Reality
          </h1>
          <button id="learn" className="learn-more gold-outline">
            <p>Learn About Our Services</p>
          </button>
          <button id="explore" className="learn-more gold-outline">
            <p>Explore Properties</p>
          </button>
        </div>
        <div className="media-section">
          <div className="logo" />
        </div>
      </header>
      <section id="featured-services" className="stacked page-section">
        <div className="info-section">
          <GrCatalog className="icon" />
          <h2>Explore Our Services</h2>
          <h4>
            A short intro about SDS Property Group’s commitment to excellence in
            real estate
          </h4>
        </div>
        <div className="media-section">
          <ul id="key-services" className="flex-cards">
            {servicesCardData.map((serviceCard, index) => (
              <li
                className="service-card card"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--card-color-1), var(--card-color-2)), url('/images/background-images/card-background-image-${
                    index + 1
                  }.jpg')`,
                }}
              >
                <div className="content-container">
                  <div className="icon">{serviceCard.icon}</div>
                  <div className="text-container">
                    <h5>{serviceCard.title}</h5>
                  </div>
                  <button className="slide-button white-outline">
                    <p>Learn More</p>
                  </button>
                </div>
                <div className="background-icon">{serviceCard.icon}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section
        id="property-listings"
        className="alternating-reverse page-section"
      >
        <div className="info-section">
          <BsBuildingFill className="icon" />
          <h2>Featured Properties for Sale</h2>
        </div>
        <div className="media-section">
          <SlideShow infinite={true} delay={3000}>
            {Array.from([1, 2, 3]).map((_, i) => (
              <div
                className="property-slide slide"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--card-color-3), var(--card-color-4)), url('/images/background-images/slide-background-image-${
                    i + 1
                  }.jpg')`,
                }}
              >
                <h4 id="location">Location {i + 1}</h4>
                <ul className="key-features">
                  <li className="key-feature">
                    <p>Key Feature 1</p>
                  </li>
                  <li className="key-feature">
                    <p>Key Feature 2</p>
                  </li>
                  <li className="key-feature">
                    <p>Key Feature 3</p>
                  </li>
                </ul>
                <button className="slide-button dark-fill">
                  <p>View Details</p>
                </button>
              </div>
            ))}
          </SlideShow>
        </div>
      </section>
      <section id="why-choose-us" className="alternating page-section">
        <div className="info-section">
          <CiCircleQuestion className="icon" />
          <h2>Why Choose Us?</h2>
          <h4>
            A few sentences on expertise, market insights, and tailored
            solutions
          </h4>
        </div>
        <div className="media-section">
          <Slider infinite={true} delay={3000}>
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
          <BiMessageDetail className="icon" />
          <h2>What Our Clients Say</h2>
        </div>
        <div className="media-section">
          <Ticker infinite={true} showPlayButton={false} speed={0.1}>
            {Array.from([1, 2, 3, 4, 5]).map((_, i) => (
              <div className="testimonial-slide slide">
                <div className="content-container">
                  <div className="content">
                    <h4>Client Review {i + 1}</h4>
                  </div>
                </div>
              </div>
            ))}
          </Ticker>
        </div>
      </section>
      <section id="news-insights" className="stacked page-section">
        <div className="info-section">
          <IoNewspaper className="icon" />
          <h2>Latest Insights & News</h2>
          <p>
            Share updates on real estate trends, investment tips, or company
            milestones. Include a few blog post previews with "Read More" links.
          </p>
        </div>
        <div className="media-section">
          <Carousel infinite={true} showPositionIndicator={false} delay={3000}>
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
          <RiMailFill className="icon" />
          <h2>Looking for the perfect property? Let us help you find it!</h2>
          <button className="learn-more gold-outline">
            Schedule a Consultation
          </button>
          <button className="learn-more gold-outline">
            Browse All Properties
          </button>
        </div>
        <div className="media-section">
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Home;
