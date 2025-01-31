import Image from "next/image";
import {
  ResumeContainer,
  ResumeHeading,
  ResumeHeadingBox,
  ResumePictureTextBox,
  ResumeText,
  ResumeTextBox,
} from "./Resume.styles";
import Larissa from "@/public/assets/larissa-sartori.JPG";

export default function Resume() {
  return (
    <ResumeContainer>
      <ResumeHeadingBox>
        <ResumeHeading>Education & Work</ResumeHeading>
      </ResumeHeadingBox>
      <ResumePictureTextBox>
        <Image
          src={Larissa}
          alt={"Larissa Sartori-Cader"}
          //   width={600}
          //   height={800}
          width={200}
          height={0}
          style={{ objectFit: "cover", borderRadius: "5%" }}
        />
        <ResumeTextBox>
          <ResumeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque condimentum finibus feugiat. Donec dui nibh, egestas ut
            nunc at, ullamcorper malesuada enim. Donec facilisis nunc ut tortor
            varius, at semper ligula hendrerit. Quisque tellus justo, tempor a
            magna ut, viverra pretium enim. Nullam eu eros libero. Donec sodales
            sagittis cursus. Curabitur efficitur nunc eget aliquet convallis.
            Sed tempor metus vitae urna sollicitudin scelerisque. Nulla rhoncus
            ipsum sed ullamcorper aliquam. Quisque commodo sem sollicitudin odio
            consequat, eget sodales mi viverra. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Pellentesque condimentum finibus
            feugiat. Donec dui nibh, egestas ut nunc at, ullamcorper malesuada
            enim. Donec facilisis nunc ut tortor varius, at semper ligula
            hendrerit. Quisque tellus justo, tempor a magna ut, viverra pretium
            enim. Nullam eu eros libero. Donec sodales sagittis cursus.
            Curabitur efficitur nunc eget aliquet convallis. Sed tempor metus
            vitae urna sollicitudin scelerisque. Nulla rhoncus ipsum sed
            ullamcorper aliquam. Quisque commodo sem sollicitudin odio
            consequat, eget sodales mi viverra. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Pellentesque condimentum finibus
            feugiat. Donec dui nibh, egestas ut nunc at, ullamcorper malesuada
            enim. Donec facilisis nunc ut tortor varius, at semper ligula
            hendrerit. Quisque tellus justo, tempor a magna ut, viverra pretium
            enim. Nullam eu eros libero. Donec sodales sagittis cursus.
            Curabitur efficitur nunc eget aliquet convallis. Sed tempor metus
            vitae urna sollicitudin scelerisque. Nulla rhoncus ipsum sed
            ullamcorper aliquam. Quisque commodo sem sollicitudin odio
            consequat, eget sodales mi viverra.
          </ResumeText>
        </ResumeTextBox>
      </ResumePictureTextBox>
    </ResumeContainer>
  );
}
