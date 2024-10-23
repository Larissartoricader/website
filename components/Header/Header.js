import Navigation from "../Navigation/Navigation";
import { HeaderContainer, HeaderNaming } from "./Header.styles";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderNaming>Larissa Sartori-Cader</HeaderNaming>
      <Navigation />
    </HeaderContainer>
  );
}
