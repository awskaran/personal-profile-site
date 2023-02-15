import React from "react";
import { GridColumn, Image } from "semantic-ui-react";
import cert1 from "../images/cert-1.png";
import cert2 from "../images/cert-2.png";
import cert3 from "../images/cert-3.png";
import cert4 from "../images/cert-4.png";
import cert5 from "../images/cert-5.png";
import cert6 from "../images/cert-6.png";
import cert7 from "../images/cert-7.png";
import cert8 from "../images/cert-8.png";
// import cert9 from "../images/cert-9.png";

const certs = [cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8];
const CertificationBadges = () =>
  certs.map((cert, index) => (
    <GridColumn key={index} computer={2} mobile={4} table={4}>
      <Image src={cert} />
    </GridColumn>
  ));

export default CertificationBadges;
