import React, { useRef, useEffect, useState } from "react";
import Faq from "react-faq-component";
import AOS from "aos";
import "aos/dist/aos.css";
const data = {
  title: "FAQ",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
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
