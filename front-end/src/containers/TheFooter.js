import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        Developed with
        <a href="https://strapi.io/" className="ml-1" target="_blank" rel="noopener noreferrer">
           Strapi
        </a>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a
          href="https://coreui.io/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          CoreUI for React
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
