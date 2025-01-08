import React from "react";

const About = () => {
  return (
    <main id="about" className="page-section">
      <section id="about-us">
        Welcome to SDS Property Group, where excellence meets innovation in luxury real estate.
        With a steadfast commitment to delivering unparalleled service, we specialize in providing
        comprehensive real estate solutions for discerning clients across a wide range of sectors.
      </section>
      <section id="who-are-wee">
        At SDS Property Group, we pride ourselves on being more than just a brokerage. We are your trusted advisors, dedicated to helping you navigate the complexities of real estate investment, management, and development. With years of expertise and a hands-on approach, our team is equipped to handle everything from residential transactions to large-scale commercial projects.
      </section>
      <section id="what-we-do">
        Our diverse portfolio of services ensures that every client, whether an individual investor or a corporate entity, finds tailored solutions that align with their goals
      </section>
      <section id="residential">
        <h2>Residential & Commercial Real Estate</h2>
        <div className="slider">
          <ul>
            <li class="card">
              <h3>Buy/Sell Homes</h3>
              <p>Helping families and individuals find their dream homes.</p>
            </li>
            <li class="card">
              <h3>Condos & Rental Units</h3>
              <p>Assisting with buying, selling, or renting luxurious condos and residential units.</p>
            </li>
            <li class="card">
              <h3>Commercial & Industrial Lots</h3>
              <p>Matching businesses with prime properties for offices, warehouses, and factories.</p>
            </li>
          </ul>
        </div>
      </section>
      <section id="investments">
        <h2>Investments and Developments</h2>
        <div className="slider">
          <ul>
            <li class="card">
              <h3>Pre-Development Properties</h3>
              <p>Expert guidance on promising projects for early-stage investors.</p>
            </li>
            <li class="card">
              <h3>NRI Investments</h3>
              <p>Dedicated services for non-resident Indians seeking lucrative opportunities.</p>
            </li>
            <li class="card">
              <h3>Colony Development</h3>
              <p>Transforming visions into thriving communities.</p>
            </li>
            <li class="card">
              <h3>Land Management & Equity Protection</h3>
              <p>Safeguarding the value of your land and investments.</p>
            </li>
          </ul>
        </div>
      </section>
      <section id="strategic-services">
        <h2>Strategic Services</h2>
        <div className="slider">
          <ul>
            <li class="card">
              <h3>Factory Relocation</h3>
              <p>Seamless transitions for industrial operations.</p>
            </li>
            <li class="card">
              <h3>Land Procurement</h3>
              <p>Sourcing premium land for ambitious projects.</p>
            </li>
            <li class="card">
              <h3>Mortgage Assistance</h3>
              <p>Innovative solutions to relieve financial burdens, including takeover, renovation, and profitable resale.</p>
            </li>
            <li class="card">
              <h3>Project Development Management</h3>
              <p>From concept to completion, our team ensures every project achieves its full potential.</p>
            </li>
          </ul>
        </div>
      </section>
      <section id="insurance">
        <h2>Insurance & Renovation</h2>
        <div className="slider">
          <ul>
            <li class="card">
              <h3>Comprehensive Insurance</h3>
              <p>Safeguard your property, life, and assets with tailored insurance plans.</p>
            </li>
            <li class="card">
              <h3>Renovations</h3>
              <p>Enhancing property value through meticulous upgrades and remodeling.</p>
            </li>
          </ul>
        </div>
      </section>
      <section id="why-choose-us">
        <h4>
          Our team combines market expertise with a proactive approach, ensuring your investments are managed with the utmost care. Whether you're purchasing your first home, expanding your business footprint, or exploring high-return investments, we are here to guide you every step of the way.
        </h4>
        <h4>
          Discover the difference of working with a real estate partner who values your success as much as you do. Let SDS Property Group turn your real estate aspirations into reality.
        </h4>
      </section>
    </main>
  );
};

export default About;
