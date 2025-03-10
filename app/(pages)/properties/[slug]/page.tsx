import React from "react";
import { Property } from "../page";
import { getItem } from "@/app/utils/server-actions";
import { formatDate } from "@/app/utils/utility-functions";
import SlideShow from "@/app/components/ui/slideshow";
import { urlFor } from "@/app/lib/client";
import { MdLocationOn } from "react-icons/md";

const PropertyPage = async ({ params }: { params: { slug: string } }) => {
  const propertyData: Property = await getItem("property", params.slug);
  const {
    name,
    datePosted,
    size,
    price,
    avgRent,
    rooms,
    state,
    city,
    area,
    type,
    amenities,
    images,
    overview,
  } = propertyData;
  return (
    <main className="property-page">
      <section className="property-info">
        <SlideShow
          infinite={true}
          delay={2000}
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
          <div className="header">
            <small>{formatDate(datePosted)}</small>
            <h2>{name}</h2>
            <p>
              <MdLocationOn />
              {city}, {state}
            </p>
            <div className="price-container">
              <p>{"\u20B9" + price}</p>
            </div>
          </div>
          <div className="body">
            <p>
              <strong>Type</strong> {type}
            </p>
            <p>
              <strong>Size</strong> {size} sqft
            </p>
            <p>
              <strong>Average Rent</strong> {"\u20B9" + avgRent}
            </p>
            <p>
              <strong>Rooms</strong> {rooms ?? "Not Applicable"}
            </p>
            <p>
              <strong>Region</strong> {area}
            </p>
            <p>
              <strong>City</strong> {city}
            </p>
            <p>
              <strong>State</strong> {state}
            </p>
            <p>
              <strong>Price Per Sqft</strong>{" "}
              {"\u20B9" + Math.round(price / size)}
            </p>
          </div>
          <div className="overview">
            <p>{overview}</p>
          </div>
          <div className="amenities-container">
            <h4>Amenities</h4>
            <div className="amenities">
              {amenities.map((amenity) => {
                return (
                  <p className="tag" key={amenity}>
                    {amenity}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PropertyPage;
