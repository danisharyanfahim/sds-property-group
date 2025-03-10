import SlideShow from "@/app/components/ui/slideshow";
import { urlFor } from "@/app/lib/client";
import { getAllItems } from "@/app/utils/server-actions";
import { formatTimeDifference } from "@/app/utils/utility-functions";
import Link from "next/link";
import React from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

export interface Property {
  name: string;
  currentSlug: string;
  datePosted: string;
  size: number;
  price: number;
  avgRent: number;
  rooms: number | null;
  state: string;
  city: string;
  area: string;
  type: string;
  amenities: string[];
  overview: string;
  images: any[];
}

const Properties = async () => {
  const propertyData: Property[] = await getAllItems("property");
  return (
    <main className="property-listings-page">
      <section className="stacked">
        <div className="info-section">
          <BsFillBuildingsFill className="icon" />
          <h2 className="title">Properties For Sale</h2>
          <h4>Short description explaining the various services we provide</h4>
        </div>
        <div className="properties-container">
          {propertyData.map((property) => {
            const {
              name,
              datePosted,
              size,
              price,
              rooms,
              state,
              city,
              type,
              images,
              currentSlug,
            } = property;
            return (
              <div className="property-card">
                <SlideShow
                  infinite={true}
                  autoPlay={false}
                  showPositionIndicator={false}
                  showPositionButtons={false}
                  showPlayButton={false}
                >
                  {images.map((image) => {
                    return (
                      <figure className="image-container">
                        <img
                          src={urlFor(image).url()}
                          alt="property-image"
                          className="property-image"
                          loading="lazy"
                        />
                      </figure>
                    );
                  })}
                </SlideShow>
                <div className="content-container">
                  <div className="background-icon">
                    <img src="/images/sds-logo.svg" alt="company-logo" />
                  </div>
                  <div className="price-container">
                    <h4>{"\u20B9" + price} </h4>
                  </div>
                  <small>{formatTimeDifference(datePosted)}</small>
                  <h2>{name}</h2>
                  <p>{type}</p>
                  <p>
                    {size} sqft |{" "}
                    {rooms !== null && rooms !== undefined
                      ? rooms + `${rooms > 1 ? " beds" : " bed"}`
                      : "Not Applicable"}
                  </p>
                  <p>
                    <MdLocationOn />
                    {city}, {state}
                  </p>
                  <div className="button-container">
                    <Link
                      href={`/properties/${currentSlug}`}
                      className="property-link"
                    >
                      <button className="link-button dark-fill">
                        <p>Learn More</p>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Properties;

{
  /* <section id="commercial-real-estate">
        <h2>Commercial Real Estate</h2>
        <ul>
          <li className="card" id="buy/sell condos">
            <h4>Industrial Lots</h4>
            <button className="properties-button">Property for Sale</button>
          </li>
        </ul>
      </section>
      <section id="residential">
        <h2>Residential Properties</h2>
        <ul>
          <li className="card" id="buy/sell homes">
            <h4>Buy/Sell Homes</h4>
            <p>
              With a deep understanding of market trends, we make buying or
              selling homes a stress-free experience. From luxurious estates to
              starter homes, we provide top-tier marketing, negotiation, and
              closing services to maximize your investment and ensure a smooth
              transaction.
            </p>
            <button className="properties-button">Property for Sale</button>
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
            <button className="properties-button">Property for Sale</button>
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
            <button className="properties-button">Property for Sale</button>
          </li>
        </ul>
      </section>
      <section id="investments">
        <h2>Investments</h2>
        <ul>
          <li>
            <h4>NRI Investments</h4>
          </li>
          <li>
            <h4>Colony Development</h4>
          </li>
          <li>
            <h4>Pre Development Properties</h4>
          </li>
          <li>
            <h4>Land/Equity Protection</h4>
          </li>
          <li>
            <h4>Factory Relocation</h4>
          </li>
          <li>
            <h4>Land Management</h4>
          </li>
          <li>
            <h4>Renovations</h4>
          </li>
          <li>
            <h4>Project Development Management</h4>
          </li>
          <li>
            <h4>Land Procurement for Projects with a hands on team</h4>
          </li>
          <li>
            <h4>
              Mortgage assistance (we take over mortgage, pay a small fee,
              transfer title, then renovate, sell, make money on buy)
            </h4>
          </li>
          <h4>Insurance</h4>
          <li>
            <ul>
              <li>
                <p>Property</p>
              </li>
              <li>
                <p>Life</p>
              </li>
              <li>
                <p>Assets/Equity</p>
              </li>
            </ul>
          </li>
        </ul>
      </section> */
}
