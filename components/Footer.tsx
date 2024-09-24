import {
  FooterBody,
  FooterContainer,
  FooterContent,
  FooterHeader,
  FooterIcon,
  FooterIconWrapper,
  FooterLink,
  FooterText,
  // FooterTile,
  FooterWrapper,
} from "./Footer.Styles";
import Telegram from "@/public/Telegram";
import Twitter from "@/public/Twitter";
import Discord from "@/public/Discord";
import Link from "next/link";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterBody>
          <img src="/logo.png" alt="Astro Jetson Logo" style={{ height: 'auto', width: '250px' }} />
          <FooterText>
            Astro Jetson is a community driven, fair launched DeFi Token.
          </FooterText>
          <FooterLink>
            <span>
            Astro Jetson&copy;{new Date().getFullYear()}  All rights reserved.
            </span>
          </FooterLink>
        </FooterBody>
        <FooterContent>
          <FooterBody>
            <FooterHeader>QuickLinks</FooterHeader>
            <FooterLink>
              <Link href="">About us</Link>
            </FooterLink>
            <FooterLink>
              <Link href="">White Paper</Link>
            </FooterLink>
            <FooterLink>
              <Link href="">FAQs</Link>
            </FooterLink>
          </FooterBody>

          <FooterBody>
            <FooterHeader>Products</FooterHeader>
            <FooterLink>
              <Link href="">Airdrop</Link>
            </FooterLink>
            {/* <FooterLink>
              <Link href="">Lucky Drop</Link>
            </FooterLink>
            <FooterLink>
              <Link href="">Earn</Link>
            </FooterLink> */}
          </FooterBody>

          <FooterBody>
            <FooterHeader>Press</FooterHeader>
            <FooterLink>
              <Link href="">Terms of Use</Link>
            </FooterLink>
            <FooterLink>
              <Link href="">Privacy Policy</Link>
            </FooterLink>
            {/* <FooterLink>
              <Link href="">Brand</Link>
            </FooterLink> */}
          </FooterBody>
        </FooterContent>
        <FooterBody>
          <FooterText>
            Can you feel it? That&sbquo;s your intuition nudging you towards a crew of
            inventive trailblazers. Tune in, answer the call, and join our fun,
            transformative community!
          </FooterText>
          <FooterIconWrapper style={{ justifyContent: "start" }}>
            <FooterIcon>
              <Twitter />
            </FooterIcon>
            <FooterIcon>
              <Telegram />
            </FooterIcon>
            <FooterIcon>
              <Discord />
            </FooterIcon>
          </FooterIconWrapper>
        </FooterBody>
      </FooterContainer>
    </FooterWrapper>
  );
}
