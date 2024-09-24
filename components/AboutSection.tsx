import {
  AboutCard,
  AboutCardTitle,
  AboutContainer,
  AboutContent,
  AboutGrid,
  AboutHeader,
  AboutLeft,
  AboutLeftItem,
  AboutParagraph,
  AboutRightItem,
  AboutText,
  AboutTitle,
  AboutWrapper,
  WhatHeader,
  WhatImage,
} from "./About.styles";
import Angel from "@/public/Angel.png";
import Bug from "@/public/Bug.png";
import Dat from "@/public/Dat.png";
import Image from "next/image";
import { Button3 } from "./Landing.Style";
import Link from "next/link";

export default function AboutSection() {
  const aboutData = [
    {
      image: Bug,
      title: "Community Building",
      text: "As an early supporter, you can participate in our NFT minting process. We have <span>15,000 NFTs</span> available for sale",
    },
    {
      image: Angel,
      title: "Meme Token Gains",
      text: "Each NFT is priced at <span>$0.66</span>, and each wallet can purchase up to <span>15 NFTs</span>",
    },
    {
      image: Dat,
      title: "Liquidity for Support",
      text: "Our NFT sale target is <span>$9,900</span>, which will be added to our liquidity pool to support the growth of our community.",
    },
  ];
  return (
    <AboutWrapper>
      <AboutContainer>
        <AboutLeft>
          <AboutTitle>Experience the power of Astro Jetson</AboutTitle>
          <AboutParagraph>
            Join us today to experience the power of Astro Jetson and
            revolutionize your trading experience.
          </AboutParagraph>
          {/* <AboutHeader>How to Participate</AboutHeader> */}
        </AboutLeft>
        {/* <AboutGrid>
          {aboutData.map((data, index) => (
            <AboutContent key={index}>
              <AboutCard>
                <Image src={data.image} alt={data.title} />
                <AboutCardTitle>{data.title}</AboutCardTitle>
                <AboutText dangerouslySetInnerHTML={{ __html: data.text }} />
              </AboutCard>
            </AboutContent>
          ))}
        </AboutGrid> */}
        <AboutGrid>
          <AboutLeftItem>
            <AboutRightItem>What is Astro Jetson?</AboutRightItem>
            <WhatHeader>
              Astro Jetson is a community driven, fair launched DeFi Token.
            </WhatHeader>

            <WhatHeader>
              Say goodbye to mundane investments and hello to the excitement of
              Astro Jetson. We&apos;re here to make investing an
              adrenaline-fueled ride, Investing should be thrilling, not boring.
            </WhatHeader>
          </AboutLeftItem>
          <AboutRightItem>
            <WhatImage />
          </AboutRightItem>
        </AboutGrid>
        <AboutLeft>
          <AboutTitle>
            Join us today to experience the power of Astro Jetson
          </AboutTitle>
          <AboutParagraph>
            Join us today to experience the power of Astro Jetson and
            revolutionize your trading experience.
          </AboutParagraph>
          <Button3>
            <Link href="https://t.me/astrojetsoncoin" target="_blank">
              Join Community
            </Link>
          </Button3>
        </AboutLeft>
      </AboutContainer>
    </AboutWrapper>
  );
}
