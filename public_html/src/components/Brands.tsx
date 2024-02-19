import { FC, ReactNode } from "react";
import Section from "./common/Section";
import Heading from "./common/Heading";
import nike from "../assets/images/brand-logos/nike-logo.svg";
import calvinklein from "../assets/images/brand-logos/calvinklein-logo.svg";
import pvh from "../assets/images/brand-logos/pvh-logo.svg";
import tommyhilfiger from "../assets/images/brand-logos/tommyhilfiger-logo.svg";
import speedo from "../assets/images/brand-logos/speedo-logo.svg";
import vanheusen from "../assets/images/brand-logos/vanheusen-logo.svg";
import izod from "../assets/images/brand-logos/izod-logo.svg";
import acha from "../assets/images/brand-logos/acha-logo.svg";
import fanuka from "../assets/images/brand-logos/fanuka-logo.svg";
import grindstone from "../assets/images/brand-logos/grindstone-logo.svg";
import ucww from "../assets/images/brand-logos/ucww-logo.svg";
import cascade from "../assets/images/brand-logos/cascade-logo.svg";
import BrandLogo from "./common/BrandLogo";

const Brands: FC = () => {
  const LogoGroup: FC<{ children: ReactNode }> = ({ children }) => {
    return <div className="items-center w-full flex flex-wrap">{children}</div>;
  };
  return (
    <Section>
      <Heading
        heading="Brands I've Worked With"
        type="h3"
        position="text-center sm:text-left"
      />
      <div className="flex flex-wrap justify-start mt-2">
        <LogoGroup>
          <BrandLogo logo={nike} />
          <BrandLogo logo={calvinklein} />
          <BrandLogo logo={tommyhilfiger} />
          <BrandLogo logo={pvh} />
        </LogoGroup>
        <LogoGroup>
          <BrandLogo logo={vanheusen} />
          <BrandLogo logo={speedo} />
          <BrandLogo logo={izod} />
          <BrandLogo logo={acha} />
        </LogoGroup>
        <LogoGroup>
          <BrandLogo logo={grindstone} />
          <BrandLogo logo={fanuka} />

          <BrandLogo logo={ucww} />
          <BrandLogo logo={cascade} />
        </LogoGroup>
      </div>
    </Section>
  );
};

export default Brands;
