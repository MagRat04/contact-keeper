import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFormFilter from "../contacts/ContactFilter";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFormFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
