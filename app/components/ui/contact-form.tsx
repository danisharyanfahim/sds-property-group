"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { countries } from "countries-list";

const countryCodes = Object.keys(countries);
const countryInfo = countryCodes
  .map((code) => {
    return {
      name: countries[code].name,
      phone: "+" + countries[code].phone[0],
    };
  })
  .sort();

/* This uses a lot of useState variables, just use useReducer instead  */

const ContactForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [privacy, setPrivacy] = useState<boolean>(false);

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setCountry("");
    setPhoneNumber("");
    setSubject("");
    setMessage("");
    setPrivacy(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let problem = false;
    let problemMessage = "";

    const serviceId = "service_hl8jaeq";
    const templateId = "template_pgoctl5";
    const publicKey = "gKf_CDJFpRtI8fkj3";

    const templateParams = {
      from_name: firstName + " " + lastName,
      from_email: email,
      phone_number: phoneNumber,
      country: country,
      email_subject: subject,
      to_name: "SDS Property Group",
      message: message,
    };

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      subject === "" ||
      message === ""
    ) {
      problem = true;
      problemMessage = `
        You are missing the following fields:
        ${firstName === "" ? "First Name" : ""}
         ${lastName === "" ? "Last Name" : ""} 
         ${email === "" ? "Email" : ""}
         ${subject === "" ? "Subject" : ""}
         ${message === "" ? "Message" : ""}.`;
    }

    if (!problem) {
      emailjs.send(serviceId, templateId, templateParams, publicKey).then(
        () => {
          alert(
            `Congratulations ${firstName}! Your message has been sent to me successfully.`
          );
          reset();
        },
        (error) => {
          console.log("Error sending email", error.text);
        }
      );
    } else {
      alert(problemMessage);
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit} className="form">
        <section>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </section>
        <section>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </section>
        <section>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </section>
        <section>
          <select id="country" onChange={(e) => setCountry(e.target.value)}>
            {countryInfo.map((country, index) => {
              return (
                <option
                  // selected={country.name === "Canada"}
                  key={country.name + index}
                  className="country-option"
                  style={{ backgroundColor: "var(--ui-background-color-1)" }}
                >
                  {country.name}
                </option>
              );
            })}
            <option value="" disabled selected>
              Country
            </option>
          </select>
        </section>
        <section>
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            // pattern="[0-9]{9}"
            required
          />
        </section>
        <section>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </section>
        <section className="message">
          <textarea
            id="message"
            placeholder="Message"
            value={message}
            rows={10}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </section>
        {/* <section>
            <div>
              <div className="box-container">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)} // Change to e.target.checked
                />
              </div>
              <div className="policy-text-container">
                <span>
                  By checking this box, you acknowledge that you have read and
                  agree to our Terms and Agreements regarding the collection and
                  use of your personal information. We collect data such as your
                  name and email to process requests, improve our services, and
                  communicate with you. We do not sell or trade your information
                  and take appropriate security measures to protect it. You have
                  the right to access, correct, or delete your personal
                  information at any time. For more details, please see our full
                  policy.
                </span>
              </div>
            </div>
          </section> */}
        <section className="button-container">
          <button className="send class-1" type="submit">
            <p>Send</p>
          </button>
        </section>
      </form>
    </div>
  );
};

export default ContactForm;

/* 

-Add automatic email reply when message has been sent
-Hide keys in an .env file, do the same for my site as well
 */
