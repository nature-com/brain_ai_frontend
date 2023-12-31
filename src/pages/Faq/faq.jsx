import React, { useRef, useEffect, useState } from "react";
import Faq from "react-faq-component";
import AOS from "aos";
import "aos/dist/aos.css";
const data = {
  title: "FAQ",
  rows: [
    {
      title: "How much does it cost?",
      content: `There are two plans.  The Silver and gold plan, see our plans.`,
    },
    {
      title: "AzzyWrites vs chat gbt",
      content:
        "AzzyWrites is focused on education and businesses, it extracts scholarly materials from its own database. Additionally, AzzyWrites  your unique writing style and offers a variety of instructional resources to improve learning.",
    },
    {
      title: "How does AzzyWrites work?",
      content: `AzzyWrites produces excellent educational outcomes by utilising the CORE database in conjunction with a sizable language model. Outside of the classroom, AzzyWrites serves as an economical academic resource.`,
    },
    {
      title: "How do I pay?",
      content: `You can pay on the website through our secure payment system.`,
    },
    // {
    //     title: "What is the package version",
    //     content: <p>current version is 1.2.1</p>,
    // },
  ],
};

const styles = {
  // bgColor: "#dff3eb",
  titleTextColor: "#000000",
  rowTitleColor: "#c0a35b",
  // rowContentColor: "grey",
  // arrowColor: "red",
  rowContentPaddingBottom: "10px",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};
const Faqarea = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="faq_section max-w-6xl mx-auto py-5 px-6 lg:px-0"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default Faqarea;
