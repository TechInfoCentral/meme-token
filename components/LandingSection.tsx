import { Title } from "@/commons";
import {
  // Button,
  Button2,
  ButtonWrapper,
  LandingContainer,
  LandingContent,
  LandingGrid,
  LandingHeader,
  LandingText,
  LandingWrapper,
} from "./Landing.Style";

export default function LandingSection() {
  return (
    <LandingWrapper>
      <LandingContainer>
        <LandingContent>
          <Title>Launching On Arbitrum</Title>
          <LandingHeader>$JETSON airdrop coming soon!</LandingHeader>
          <LandingText>
            A total of 1,000,000,000 tokens will be
            airdropped with a total value of $60,000 USD. All users must register to participate in the
            Airdrop.
          </LandingText>
          <ButtonWrapper>
            {/* <Button>Claim</Button> */}
            <Button2>Join Airdrop</Button2>
          </ButtonWrapper>
        </LandingContent>
        <LandingGrid />
      </LandingContainer>
    </LandingWrapper>
  );
}
