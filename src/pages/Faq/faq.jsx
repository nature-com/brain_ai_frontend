import React, { useRef, useEffect, useState } from "react";
import Faq from "react-faq-component";
import AOS from "aos";
import "aos/dist/aos.css";
const data = {
  title: "FAQ",
  rows: [
    {
      title: "How much does it cost?",
      content: `There are three plans. The Silver, Gold and Platinum plan, see our plans.`,
    },
    {
      title: "AzzyWrites vs Chatgbt",
      content:
        "AzzyWrites is focused on education, for the workplace and for business.  It extracts materials and resources from its own database. Additionally, AzzyWrites, writes to your unique writing style and offers a variety of instructional resources to enhance your learning.",
    },
    {
      title: "How do I pay?",
      content: `You can pay on the website through our secure payment system.`,
    },
    {
      title: "Can I cancel anytime?",
      content: `Yes, can cancel anytime with AzzyWrites.`,
    },
    {
      title: "Do I get the same answer again?",
      content: `AzzyWrites produces 100% unique answers each and every time when creating an answer from any writing tool; you may ask the same question 100 times and receive a new response each time.`,
    },
    {
      title: "Can I request a new feature?",
      content: `Yes, you can email support@azzywrites.com with feature requests, and we'll see if we can implement them.`,
    },
    {
      title: "Is my information safe with AzzyWrites?",
      content: `100% user privacy is our first goal here. AzzyWrite doesn't utilise, sell, or disclose any of the data you submit.`,
    },
    {
      title: "What support is available?",
      content: `You can email support@azzywrites.com in contact.`,
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
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default Faqarea;
