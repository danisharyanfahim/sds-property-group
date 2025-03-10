import Carousel from "@/app/components/ui/carousel";
import ContactForm from "@/app/components/ui/contact-form";
import Slider from "@/app/components/ui/slider";
import SlideShow from "@/app/components/ui/slideshow";
import Ticker from "@/app/components/ui/ticker";
import { list } from "aws-amplify/storage";
import Link from "next/link";
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
import { Property } from "../properties/page";
import { getLatestItems } from "@/app/utils/server-actions";
import { urlFor } from "@/app/lib/client";

const servicesCardData: { title: string; icon: React.ReactNode }[] = [
  { title: "Colony Development", icon: <TfiRulerAlt2 /> },
  { title: "Mortgage Assistance", icon: <GiBanknote /> },
  { title: "Investments", icon: <VscGraphLine /> },
  {
    title: "Residential & Commercial Real Estate",
    icon: <BiSolidBuildingHouse />,
  },
];

const realEstateNews = [
  {
    title: "Mumbai Sees 25% Surge in Luxury Apartment Sales in 2025",
    summary:
      "The demand for high-end residences in Mumbai has skyrocketed, with a 25% increase in sales this year. Experts attribute this to rising disposable income and increased interest from NRIs looking to invest in India’s real estate market.",
  },
  {
    title: "Government Announces Tax Benefits for First-Time Homebuyers",
    summary:
      "In a major boost to the real estate sector, the Indian government has introduced new tax incentives for first-time homebuyers. This initiative aims to make housing more affordable and boost home ownership across metro and tier-2 cities.",
  },
  {
    title: "Bangalore’s IT Corridor Witnesses Record-High Office Space Leasing",
    summary:
      "Tech companies continue to expand in Bangalore, leading to a record-breaking demand for office spaces in the city’s IT corridors. Experts predict rental prices will rise steadily over the next five years.",
  },
  {
    title: "Delhi NCR’s Affordable Housing Projects Gain Popularity",
    summary:
      "With increasing urban migration, Delhi NCR has seen a surge in affordable housing projects. Real estate developers are focusing on providing budget-friendly options without compromising on amenities.",
  },
  {
    title: "Real Estate Prices in Hyderabad Expected to Double by 2030",
    summary:
      "Analysts predict Hyderabad’s property prices will double in the next five years due to infrastructure development, IT industry expansion, and increasing investor confidence in the market.",
  },
];

const testimonials = [
  {
    name: "Rajesh Verma",
    review:
      "SDS Property Groups made my home-buying journey seamless. Their team was professional, transparent, and extremely knowledgeable about the market. Highly recommended!",
  },
  {
    name: "Priya Iyer",
    review:
      "I had a fantastic experience selling my apartment with SDS Property Groups. They handled everything from listing to closing efficiently and got me the best deal possible.",
  },
  {
    name: "Amit Khanna",
    review:
      "Investing in real estate can be overwhelming, but SDS Property Groups provided expert guidance that helped me make a profitable decision. Their market insights are top-notch!",
  },
  {
    name: "Neha Sharma",
    review:
      "Finding a rental unit was stress-free thanks to SDS Property Groups. They understood my requirements perfectly and found a great place within my budget in no time.",
  },
  {
    name: "Vikram Patil",
    review:
      "SDS Property Groups helped me expand my commercial real estate portfolio with ease. Their professionalism and dedication set them apart from other agencies.",
  },
];

const Home = async () => {
  const propertyData: Property[] = await getLatestItems("property", 5);
  return (
    <main id="home">
      <header id="first-impression" className="page-section">
        <div className="info-section">
          <h1>
            Transforming <span className="gold-text">Real Estate</span> Dreams
            into Reality
          </h1>
          <Link href={"/services"}>
            <button id="learn" className="learn-more gold-outline">
              <p>Learn About Our Services</p>
            </button>
          </Link>
          <Link href={"/properties"}>
            <button id="explore" className="learn-more gold-outline">
              <p>Explore Properties</p>
            </button>
          </Link>
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
                  <Link href={"/services"}>
                    <button className="slide-button white-outline">
                      <p>Learn More</p>
                    </button>
                  </Link>
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
            {propertyData.map((property, i) => (
              <div
                className="property-slide slide"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--card-color-3), var(--card-color-4)), url('${urlFor(
                    property.images[0]
                  ).url()}')`,
                }}
              >
                <h4 id="location">{property.name}</h4>
                <ul className="key-features">
                  {property.amenities.slice(0, 5).map((amenity) => {
                    return (
                      <li className="key-feature" key={amenity}>
                        <p>{amenity}</p>
                      </li>
                    );
                  })}
                </ul>
                <Link href={`/properties/${property.currentSlug}`}>
                  <button className="slide-button dark-fill">
                    <p>View Details</p>
                  </button>
                </Link>
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
            {testimonials.map((testimonial, i) => {
              const { name, review } = testimonial;
              return (
                <div className="testimonial-slide slide">
                  <div className="content-container">
                    <div className="content">
                      <i>{review}</i>
                      <h4>—{name}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </Ticker>
        </div>
      </section>
      <section id="news-insights" className="stacked page-section">
        <div className="info-section">
          <IoNewspaper className="icon" />
          <h2>Latest Insights & News</h2>
          <h4>
            Share updates on real estate trends, investment tips, or company
            milestones.
          </h4>
        </div>
        <div className="media-section">
          <Carousel infinite={true} showPositionIndicator={false} delay={3000}>
            {realEstateNews.map((news, i) => (
              <div
                className="news-card card"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--card-color-1), var(--card-color-2)), url('/images/background-images/slide-background-image-${
                    7 + i
                  }.jpg')`,
                }}
              >
                <div className="content">
                  <h4>{news.title}</h4>
                  <p>{news.summary}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <section id="call-to-action" className="alternating page-section">
        <div className="info-section">
          <RiMailFill className="icon" />
          <h2>Looking for the perfect property? Let us help you find it!</h2>
          <Link href={"/contact"}>
            <button className="learn-more gold-outline">
              Schedule a Consultation
            </button>
          </Link>
          <Link href={"/properties"}>
            <button className="learn-more gold-outline">
              Browse All Properties
            </button>
          </Link>
        </div>
        <div className="media-section">
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Home;
