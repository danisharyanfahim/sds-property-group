import FlipCard from "@/app/components/flip-card";
import Grid from "@/app/components/ui/grid";
import React from "react";
import { BiSolidBank, BiSolidFactory } from "react-icons/bi";
import { BsBuilding, BsGraphUpArrow } from "react-icons/bs";
import {
  FaFileInvoiceDollar,
  FaHandshake,
  FaMoneyCheck,
  FaRegCreditCard,
  FaRulerCombined,
} from "react-icons/fa";
import { FaMoneyCheckDollar, FaSackDollar } from "react-icons/fa6";
import { GiField, GiHighGrass } from "react-icons/gi";
import { IoHomeSharp } from "react-icons/io5";
import { LuConstruction } from "react-icons/lu";
import { MdLocalGroceryStore, MdOutlineSecurity } from "react-icons/md";
import { PiWarehouseFill } from "react-icons/pi";
import { RiBuilding2Fill } from "react-icons/ri";

const realEstateServices = [
  {
    title: "Commercial Real Estate",
    description:
      "Whether you're looking to expand your business, lease premium office space, or invest in commercial properties, we offer expert guidance to find the perfect location and structure deals that maximize profitability. Our in-depth market analysis ensures you secure high-value properties that align with your strategic goals.",
    icon: <MdLocalGroceryStore className="icon" />,
  },
  {
    title: "Industrial Lots",
    description:
      "From sourcing prime industrial land to closing the deal, we handle every step of acquiring, selling, or leasing lots for factories, warehouses, or logistic hubs. Our extensive network and understanding of zoning regulations ensure you get a property tailored to your operational needs, with a clear path to development or expansion.",
    icon: <PiWarehouseFill className="icon" />,
  },
  {
    title: "Property for Sale",
    description:
      "Access a carefully curated portfolio of properties ready for sale, ranging from premium residential homes to high-return commercial and industrial spaces. We connect you with opportunities that match your vision, ensuring seamless transactions and exceptional value in every deal.",
    icon: <FaFileInvoiceDollar className="icon" />,
  },
  {
    title: "Residential Real Estate",
    description:
      "Turn your dream home into reality with our comprehensive residential services. Whether you're buying, selling, or renting, we focus on premium locations, competitive pricing, and personalized support to ensure you find the perfect property that fits your lifestyle and financial goals.",
    icon: <BsBuilding className="icon" />,
  },
  {
    title: "Buy/Sell Homes",
    description:
      "With a deep understanding of market trends, we make buying or selling homes a stress-free experience. From luxurious estates to starter homes, we provide top-tier marketing, negotiation, and closing services to maximize your investment and ensure a smooth transaction.",
    icon: <IoHomeSharp className="icon" />,
  },
  {
    title: "Buy/Sell Condos",
    description:
      "Specializing in modern, high-demand condominiums, we connect buyers and sellers with unmatched opportunities. Our streamlined process ensures clients enjoy effortless transactions while achieving the best market value in prime urban and coastal locations.",
    icon: <RiBuilding2Fill className="icon" />,
  },
  {
    title: "Rental Units",
    description:
      "Whether you’re a tenant seeking a perfect rental or a landlord looking for reliable tenants, our team simplifies the process. We manage everything from property marketing to lease agreements, ensuring both parties benefit from a hassle-free experience and long-term satisfaction.",
    icon: <FaMoneyCheck className="icon" />,
  },
  {
    title: "Investments",
    description:
      "Diversify your portfolio with high-return real estate investment opportunities. From residential rentals to commercial ventures, we offer expert advice and market intelligence, helping you identify and capitalize on lucrative properties tailored to your financial aspirations.",
    icon: <BsGraphUpArrow className="icon" />,
  },
  {
    title: "NRI Investments",
    description:
      "As specialists in NRI investment, we provide a full suite of services tailored for overseas clients. From identifying prime opportunities to managing transactions and ensuring compliance, we make it easy for NRIs to own and profit from properties in India.",
    icon: <FaRegCreditCard className="icon" />,
  },
  {
    title: "Colony Development",
    description:
      "Transform raw land into thriving, well-planned communities with our colony development expertise. We handle everything from zoning and planning to infrastructure development, creating sustainable neighborhoods that meet modern living standards and enhance property values.",
    icon: <LuConstruction className="icon" />,
  },
  {
    title: "Pre-Development Properties",
    description:
      "Unlock the potential of properties in the planning stage with our pre-development expertise. We provide insights into upcoming projects, handle negotiations, and assist in securing high-value investments before they hit the open market.",
    icon: <GiHighGrass className="icon" />,
  },
  {
    title: "Land/Equity Protection",
    description:
      "Safeguard your most valuable assets with our proactive land and equity protection services. We offer strategies to mitigate risks, maximize land value, and preserve your equity through tailored plans that align with your financial objectives.",
    icon: <MdOutlineSecurity className="icon" />,
  },
  {
    title: "Factory Relocation",
    description:
      "Relocate your industrial operations efficiently with our factory relocation services. From site selection and logistics planning to infrastructure setup, we ensure your transition is seamless, minimizing downtime and ensuring operational continuity.",
    icon: <BiSolidFactory className="icon" />,
  },
  {
    title: "Land Management",
    description:
      "Maximize the potential of your land assets with our professional land management services. From maintenance and optimization to long-term value enhancement, we ensure your properties remain profitable and aligned with market demands.",
    icon: <GiField className="icon" />,
  },
  {
    title: "Renovations",
    description:
      "Elevate the value and appeal of your property with our renovation services. From minor updates to full-scale remodeling, our team ensures meticulous attention to detail, modern designs, and a seamless execution that transforms your space into a premium asset.",
    icon: <FaRulerCombined className="icon" />,
  },
  {
    title: "Project Development Management",
    description:
      "We bring your real estate vision to life with end-to-end project management services. From feasibility studies and planning to construction and delivery, we oversee every aspect to ensure your project is completed on time, within budget, and to the highest standards.",
    icon: <BiSolidBank className="icon" />,
  },
  {
    title: "Land Procurement for Projects",
    description:
      "Secure prime locations for your next big project with our land procurement expertise. Our hands-on team navigates zoning laws, negotiates terms, and identifies high-potential plots, ensuring you have the foundation for a successful development.",
    icon: <FaMoneyCheckDollar className="icon" />,
  },
  {
    title: "Mortgage Assistance",
    description:
      "Eliminate financial stress with our innovative mortgage assistance solutions. We take over mortgages, pay a small fee, handle title transfers, renovate properties, and resell them for profit, offering clients a convenient way to offload distressed assets.",
    icon: <FaSackDollar className="icon" />,
  },
];

const Services = () => {
  return (
    <main className="services-page">
      <section id="services" className="stacked">
        <div className="info-section">
          <FaHandshake className="icon" />
          <h2 className="title">Services</h2>
          <h4>Short description explaining the various services we provide</h4>
        </div>
        <Grid>
          {realEstateServices.map((service, index) => {
            return (
              <li className="grid-item">
                <FlipCard
                  icon={service.icon}
                  front={<h4>{service.title}</h4>}
                  back={<p>{service.description}</p>}
                  backgroundImage={`/images/background-images/slide-background-image-${
                    index + 1
                  }.${index < 12 ? "jpg" : index < 15 ? "webp" : "avif"}`}
                />
              </li>
            );
          })}
        </Grid>
        {/* <ol>
          <li className="card" id="commercial real estate">
            <h4>Commercial Real Estate</h4>
            <p>
              Whether you're looking to expand your business, lease premium
              office space, or invest in commercial properties, we offer expert
              guidance to find the perfect location and structure deals that
              maximize profitability. Our in-depth market analysis ensures you
              secure high-value properties that align with your strategic goals.
            </p>
          </li>
          <li className="card" id="industrial lots">
            <h4>Industrial Lots</h4>
            <p>
              From sourcing prime industrial land to closing the deal, we handle
              every step of acquiring, selling, or leasing lots for factories,
              warehouses, or logistic hubs. Our extensive network and
              understanding of zoning regulations ensure you get a property
              tailored to your operational needs, with a clear path to
              development or expansion.
            </p>
          </li>
          <li className="card" id="property for sale">
            <h4>Property for Sale</h4>
            <p>
              Access a carefully curated portfolio of properties ready for sale,
              ranging from premium residential homes to high-return commercial
              and industrial spaces. We connect you with opportunities that
              match your vision, ensuring seamless transactions and exceptional
              value in every deal.
            </p>
          </li>
          <li className="card" id="residential real estate">
            <h4>Residential Real Estate</h4>
            <p>
              Turn your dream home into reality with our comprehensive
              residential services. Whether you're buying, selling, or renting,
              we focus on premium locations, competitive pricing, and
              personalized support to ensure you find the perfect property that
              fits your lifestyle and financial goals.
            </p>
          </li>
          <li className="card" id="buy/sell homes">
            <h4>Buy/Sell Homes</h4>
            <p>
              With a deep understanding of market trends, we make buying or
              selling homes a stress-free experience. From luxurious estates to
              starter homes, we provide top-tier marketing, negotiation, and
              closing services to maximize your investment and ensure a smooth
              transaction.
            </p>
          </li>
          <li className="card" id="buy/sell condos">
            <h4>Buy/Sell Condos</h4>
            <p>
              Specializing in modern, high-demand condominiums, we connect
              buyers and sellers with unmatched opportunities. Our streamlined
              process ensures clients enjoy effortless transactions while
              achieving the best market value in prime urban and coastal
              locations.
            </p>
          </li>
          <li className="card" id="rental units">
            <h4>Rental Units</h4>
            <p>
              Whether you’re a tenant seeking a perfect rental or a landlord
              looking for reliable tenants, our team simplifies the process. We
              manage everything from property marketing to lease agreements,
              ensuring both parties benefit from a hassle-free experience and
              long-term satisfaction.
            </p>
          </li>
          <li className="card" id="investments">
            <h4>Investments</h4>
            <p>
              Diversify your portfolio with high-return real estate investment
              opportunities. From residential rentals to commercial ventures, we
              offer expert advice and market intelligence, helping you identify
              and capitalize on lucrative properties tailored to your financial
              aspirations.
            </p>
          </li>
          <li className="card" id="nri investments">
            <h4>NRI Investments</h4>
            <p>
              As specialists in NRI investment, we provide a full suite of
              services tailored for overseas clients. From identifying prime
              opportunities to managing transactions and ensuring compliance, we
              make it easy for NRIs to own and profit from properties in India.
            </p>
          </li>
          <li className="card" id="colony development">
            <h4>Colony Development</h4>
            <p>
              Transform raw land into thriving, well-planned communities with
              our colony development expertise. We handle everything from zoning
              and planning to infrastructure development, creating sustainable
              neighborhoods that meet modern living standards and enhance
              property values.
            </p>
          </li>
          <li className="card" id="pre-development properties">
            <h4>Pre-Development Properties</h4>
            <p>
              Unlock the potential of properties in the planning stage with our
              pre-development expertise. We provide insights into upcoming
              projects, handle negotiations, and assist in securing high-value
              investments before they hit the open market.
            </p>
          </li>
          <li className="card" id="land/equity protection">
            <h4>Land/Equity Protection</h4>
            <p>
              Safeguard your most valuable assets with our proactive land and
              equity protection services. We offer strategies to mitigate risks,
              maximize land value, and preserve your equity through tailored
              plans that align with your financial objectives.
            </p>
          </li>
          <li className="card" id="factory relocation">
            <h4>Factory Relocation</h4>
            <p>
              Relocate your industrial operations efficiently with our factory
              relocation services. From site selection and logistics planning to
              infrastructure setup, we ensure your transition is seamless,
              minimizing downtime and ensuring operational continuity.
            </p>
          </li>
          <li className="card" id="land management">
            <h4>Land Management</h4>
            <p>
              Maximize the potential of your land assets with our professional
              land management services. From maintenance and optimization to
              long-term value enhancement, we ensure your properties remain
              profitable and aligned with market demands.
            </p>
          </li>
          <li className="card" id="renovations">
            <h4>Renovations</h4>
            <p>
              Elevate the value and appeal of your property with our renovation
              services. From minor updates to full-scale remodeling, our team
              ensures meticulous attention to detail, modern designs, and a
              seamless execution that transforms your space into a premium
              asset.
            </p>
          </li>
          <li className="card" id="project development management">
            <h4>Project Development Management</h4>
            <p>
              We bring your real estate vision to life with end-to-end project
              management services. From feasibility studies and planning to
              construction and delivery, we oversee every aspect to ensure your
              project is completed on time, within budget, and to the highest
              standards.
            </p>
          </li>
          <li className="card" id="land procurement for projects">
            <h4>Land Procurement for Projects</h4>
            <p>
              Secure prime locations for your next big project with our land
              procurement expertise. Our hands-on team navigates zoning laws,
              negotiates terms, and identifies high-potential plots, ensuring
              you have the foundation for a successful development.
            </p>
          </li>
          <li className="card" id="mortgage assistance">
            <h4>Mortgage Assistance</h4>
            <p>
              Eliminate financial stress with our innovative mortgage assistance
              solutions. We take over mortgages, pay a small fee, handle title
              transfers, renovate properties, and resell them for profit,
              offering clients a convenient way to offload distressed assets.
            </p>
          </li>
        </ol> */}
      </section>
    </main>
  );
};

export default Services;
