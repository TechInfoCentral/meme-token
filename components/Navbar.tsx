import {
  NavbarContainer,
  NavbarWrapper,
} from "./Navbar.styles";

// import Link from "next/link";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <img src="/logo.png" alt="Astro Jetson Logo" style={{ height: 'auto', width: '250px' }} />
      </NavbarContainer>
    </NavbarWrapper>
  );
}
