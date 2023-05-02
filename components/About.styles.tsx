import { Headers, Title } from "@/commons";
import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  margin: 20px 0;
  opacity: 1;
  top: 10%;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("/Dots.svg") #000;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 187.5px;
    opacity: 0.5;
    z-index: -1;
  }
  @media (max-width: 768px) {
    height: max-content;
    padding-bottom: 2rem;
    &::before {
      top: 10%;
    }
  }
`;
export const AboutImage = styled.div`
  width: 355px;
  height: 40vh;
  background: url("/Stats.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media (min-width: 768px) {
    width: 100%;
    svg {
      width: 600px;
    }
  }
`;
export const EconomicsWrapper = styled(AboutWrapper)`
  @media (max-width: 768px) {
    &::before {
      top: 0;
    }
  }
`;
export const AboutContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const AboutTitle = styled(Title)`
  text-align: left;
  text-decoration: underline;
  font-size: calc(0.6rem + ((1vw - 0.2rem) * 3));
  @media (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
    padding: 20px 0;
  }
`;
export const AboutHeader = styled(Headers)`
  background-position: left;
  background: url("/Line.svg");
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  width: 100%;
  font-size: calc(0.6rem + ((1vw - 0.2rem) * 2));
  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.5;
    padding: 20px 0;
  }
`;
export const AboutBody = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  @media (max-width: 1200px) {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const AboutCard = styled.div`
  background: #404430;
  backdrop-filter: blur(17px);
  border-radius: 22px;
  max-width: 400px;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  @media (max-width: 1200px) {
    max-width: 600px;
    height: 50vh;
  }
  @media (max-width: 768px) {
    width: 80%;
    height: 30vh;
  }
`;
export const AboutText = styled.div`
  color: #fff;
  line-height: 1.5;
  span {
    color: #41bfb3;
  }
  @media (max-width: 1200px) {
    font-size: 1rem;
  }
`;
export const LineWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const AboutLeftItem = styled.div``;
export const AboutRightItem = styled.div`
  width: 100%;
  height: 100%;
`;
export const EconomicsContainer = styled(AboutContainer)`
  width: 80%;
`;
export const AboutListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 90%;
  }
`;
export const AboutList = styled.li`
  color: #fff;
  font-size: calc(1rem + ((1vw - 0.2rem) * 1));
`;
