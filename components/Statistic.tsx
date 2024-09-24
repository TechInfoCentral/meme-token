import {
  StaticAdress,
  StaticBody,
  StaticContainer,
  StaticHeader,
  StaticImage,
  StaticText,
  StaticTitle,
  StaticWrapper,
  TextWrapper,
} from "./Statistic.Style";

export default function StatisticSection() {
  return (
    <StaticWrapper>
      <StaticContainer>
        <StaticBody>
          <StaticTitle>Burn Statistic 🔥</StaticTitle>
          <TextWrapper>
            <StaticText>
              <StaticHeader>Burned Total</StaticHeader>
              <StaticTitle>10,000,000,000</StaticTitle>
            </StaticText>

            <StaticText>
              <StaticHeader>Burned %</StaticHeader>
              <StaticTitle>10%</StaticTitle>
            </StaticText>
          </TextWrapper>
          <StaticText>
            <StaticHeader>Burn Wallet</StaticHeader>
            <StaticAdress>
              <a
                href="https://arbiscan.io/address/0xd9a5f0164d3e707bca2c6b82c5b987776261b770#code"
                rel={"noreferrer"}
                target={"_blank"}
              >
                0x0000000000000000000000000000000000000000
              </a>
            </StaticAdress>
          </StaticText>
        </StaticBody>
        <StaticImage />
      </StaticContainer>
    </StaticWrapper>
  );
}
