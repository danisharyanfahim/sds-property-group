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
