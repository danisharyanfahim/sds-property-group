import React from "react";
import { Property } from "../page";
import { getItem } from "@/app/utils/server-actions";
import { formatDate } from "@/app/utils/utility-functions";
import SlideShow from "@/app/components/ui/slideshow";
import { urlFor } from "@/app/lib/client";

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
    currentSlug,
  } = propertyData;
  return (
    <main className="property-page">
      <SlideShow
        infinite={true}
        autoPlay={false}
        showPositionIndicator={false}
        showPositionButtons={false}
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
      <h2>{name}</h2>
      <p>Posted: {formatDate(datePosted)}</p>
      <p>Type: {type}</p>
      <p>Size {size} sqft</p>
      <p>Price: {price} INR</p>
      <p>Average Rent: {avgRent} INR</p>
      <p>Rooms: {rooms ?? "Not Applicable"}</p>
      <p>State: {state}</p>
      <p>City: {city}</p>
      <p>Area: {area}</p>
      <p>Price/sqft: {Math.round(price / size)} INR</p>

      <div className="amenities-container">
        <strong>Amenities</strong>
        {amenities.map((amenity) => {
          return <p key={amenity}>{amenity}</p>;
        })}
      </div>
    </main>
  );
};

export default PropertyPage;
