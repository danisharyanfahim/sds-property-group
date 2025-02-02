import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="sds, sds-property, sds-property-group, sds-group, SDS, SdsPropertyGroup"
        />
        <meta name="description" content="Sdspropertygroup.com" />
        <meta name="author" content="Sdspropertygroup.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="DragonDev.ca" />
        <meta
          property="og:description"
          content="Sdspropertygroup.com is the home site for the SDS Property Group"
        />
        <meta
          property="og:image"
          content="https://dragondev.ca/static/icons/dragon-dev.svg"
        />
        <meta property="og:url" content="https://sdspropertygroup.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sdspropertygroup.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:author" content="Dragon Dev" />
        <meta property="og:published_time" content="2025-01-30T10:00:00Z" />
        <title>Sdspropertygroup.com</title>
      </head>
      <body>
        <Navbar />
        <div className="page">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
