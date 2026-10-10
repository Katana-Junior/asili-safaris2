import React, { useState } from "react";
import "./styles/contacts.css";

const countries = [
  { code: "TZ", name: "Tanzania", dialCode: "+255" },
  { code: "KE", name: "Kenya", dialCode: "+254" },
  { code: "UG", name: "Uganda", dialCode: "+256" },
  { code: "RW", name: "Rwanda", dialCode: "+250" },
  { code: "BI", name: "Burundi", dialCode: "+257" },
  { code: "ZA", name: "South Africa", dialCode: "+27" },
  { code: "NG", name: "Nigeria", dialCode: "+234" },
  { code: "GH", name: "Ghana", dialCode: "+233" },
  { code: "EG", name: "Egypt", dialCode: "+20" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "AU", name: "Australia", dialCode: "+61" },
  { code: "NZ", name: "New Zealand", dialCode: "+64" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "IT", name: "Italy", dialCode: "+39" },
  { code: "ES", name: "Spain", dialCode: "+34" },
  { code: "NL", name: "Netherlands", dialCode: "+31" },
  { code: "CH", name: "Switzerland", dialCode: "+41" },
  { code: "SE", name: "Sweden", dialCode: "+46" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971" },
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "CN", name: "China", dialCode: "+86" },
  { code: "JP", name: "Japan", dialCode: "+81" },
  { code: "SG", name: "Singapore", dialCode: "+65" },
];

const Contacts = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryChange = (event) => {
    const country = countries.find(({ code }) => code === event.target.value);
    if (country) {
      setSelectedCountry(country);
    }
  };

  return (
    <section className="page-content contact-page">
      <div className="contact-card">
        <header className="contact-card-header">
          <span className="contact-eyebrow">LET'S PLAN YOUR ADVENTURE</span>
          <h1>Contact Asili Safaris</h1>
          <p>Get in touch with us to plan your safari adventure.</p>
        </header>
        <form className="contact-form">
          <div className="contact-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="contact-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="contact-field">
            <label htmlFor="country">Country</label>
            <select
              id="country"
              name="country"
              value={selectedCountry.code}
              onChange={handleCountryChange}
            >
              {countries.map(({ code, name, dialCode }) => (
                <option key={code} value={code}>
                  {name} ({dialCode})
                </option>
              ))}
            </select>
          </div>
          <div className="contact-field">
            <label htmlFor="phone">Phone</label>
            <div className="phone-input">
              <span className="phone-country-code" aria-hidden="true">
                {selectedCountry.dialCode}
              </span>
              <input
                type="tel"
                id="phone"
                name="phoneNumber"
                placeholder="Phone number"
                autoComplete="tel-national"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
              />
            </div>
          </div>
          <input
            type="hidden"
            name="phone"
            value={`${selectedCountry.dialCode}${phoneNumber}`}
          />
          <input
            type="hidden"
            name="countryCode"
            value={selectedCountry.dialCode}
          />
          <div className="contact-field contact-message-field">
            <label htmlFor="message">How can we help?</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us a little about the trip you have in mind..."
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
