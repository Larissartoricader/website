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
            <p>Why choose just one path when I can explore more than one?</p>
            <p>
              My journey began in Journalism School, where I learned about
              communication, <strong>storytelling</strong>, and the diverse ways
              to deliver a message to different audiences.
            </p>

            <p>
              In my Master’s studies, I delved into
              <strong>online content</strong>: how to write effectively and
              present information in a way that captures users attention within
              seconds.
            </p>

            <p>
              In my professional journey, I discovered the power of data:
              <strong> traffic</strong>, conversion rates, and rankings. Each
              KPI can reveal the true health and performance of a project.
            </p>
            <p>
              Later, I uncovered what happens behind the scenes: how websites
              are built, how <strong>UI/UX</strong> shapes the user experience,
              and how I could create a product from scratch and deliver it to
              the final user.
            </p>
            <p>
              That’s why I chose to navigate different paths from
              <strong>
                {" "}
                Journalism to Digital Marketing and, ultimately, to Web
                Development
              </strong>
            </p>
          </ResumeText>
        </ResumeTextBox>
      </ResumePictureTextBox>
    </ResumeContainer>
  );
}
