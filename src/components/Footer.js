import React from "react";
import FooterList from "./FooterList";

let arrayFooter = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

function Footer() {
  return (
    <div className="footer">
      <ul className="list-group">
        {arrayFooter.map(element => (
          <FooterList element={element} />
        ))}
      </ul>
    </div>
  );
}

export default Footer;
