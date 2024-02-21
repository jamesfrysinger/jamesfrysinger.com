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
import wolterskluwer from "../assets/images/brand-logos/wolterskluwer-logo.svg";
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
        // position="text-center sm:text-left"
      />
      <div className="flex flex-wrap justify-start mt-2 w-full">
        <LogoGroup>
          <BrandLogo height="38px" logo={nike} />
          <BrandLogo height="19px" logo={calvinklein} />
          <BrandLogo height="43px" logo={pvh} />
          <BrandLogo height="13px" logo={tommyhilfiger} />
        </LogoGroup>
        <LogoGroup>
          <BrandLogo height="16px" logo={vanheusen} />
          <BrandLogo height="24px" logo={speedo} />
          <BrandLogo height="40px" logo={wolterskluwer} />
          <BrandLogo height="16px" logo={izod} />
        </LogoGroup>
        <LogoGroup>
          <BrandLogo height="20px" logo={acha} />
          <BrandLogo height="49px" logo={fanuka} />
          <BrandLogo height="24px" logo={grindstone} />
          <BrandLogo height="25px" logo={ucww} />
        </LogoGroup>
      </div>
    </Section>
  );
};

export default Brands;
