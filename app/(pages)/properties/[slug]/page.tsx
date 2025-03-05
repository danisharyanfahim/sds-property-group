import React from "react";
import { Property } from "../page";
import { getItem } from "@/app/utils/server-actions";

const PropertyPage = async ({ params }: { params: { slug: string } }) => {
  const propertyData: Property = await getItem("property", params.slug);
  return (
    <div>
      <h2>{propertyData.name}</h2>
    </div>
  );
};

export default PropertyPage;
