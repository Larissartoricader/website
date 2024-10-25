import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import { HeaderContainer } from "./Header.styles";
import LSClogo from "@/public/assets/LSClogo.png";

export default function Header() {
  return (
    <HeaderContainer>
      <Image
        src={LSClogo}
        alt={"Larissa Sartori-Cader"}
        width={300}
        height={150}
      />
      <Navigation />
    </HeaderContainer>
  );
}
