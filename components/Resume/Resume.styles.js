import styled from "styled-components";

export const ResumeContainer = styled.div``;

export const ResumeHeadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const ResumeHeading = styled.div`
  font-size: 2.5rem;
`;

export const ResumePictureTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    margin-inline: 50px;
  }
`;

export const ResumeTextBox = styled.div`
  margin-inline: 20px;
`;

export const ResumeText = styled.div`
  text-align: justify;
`;
