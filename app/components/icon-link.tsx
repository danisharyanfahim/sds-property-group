import React from "react";

const IconLink = ({
  name,
  url,
  imageUrl,
}: {
  url: string;
  imageUrl: string;
  name: string;
}) => {
  return (
    <a href={url} target="_blank">
      <div
        className="icon-link"
        id={name}
        style={{
          WebkitMaskImage: `url(${imageUrl})`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "cover",
          maskImage: `url(${imageUrl})`,
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "cover",
        }}
      ></div>
    </a>
  );
};

export default IconLink;
