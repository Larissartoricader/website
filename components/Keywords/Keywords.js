import { useTransition } from "@react-spring/web";
import { useCallback, useEffect, useRef, useState } from "react";
import { animated } from "@react-spring/web";
import {
  KeywordsContainer,
  KeywordsLayout,
  StyledOpenSentence,
  TransitionsItem,
} from "./Keywords.styles";

const KeywordsListe = [
  "SEO",
  "SEA",
  "Social Media",
  "Scrum",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Affiliate",
  "Project Management",
  "Mailing",
];

export default function Keywords() {
  const ref = useRef([]);
  const [word, setWord] = useState([]);
  const transitions = useTransition(word, {
    from: {
      scale: 0.5,
      color: "#42f5d7",
    },
    enter: [
      { scale: 0.6, color: "#f542dd" },
      { scale: 0.7, color: "#f542dd" },
      { scale: 0.8, color: "#f542dd" },
      { scale: 0.9, color: "#f542dd" },
      { scale: 0.6, color: "#f542dd" },
      { scale: 0.7, color: "#f542dd" },
      { scale: 0.8, color: "#f542dd" },
      { scale: 0.9, color: "#f542dd" },
    ],

    trail: 500,
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    setWord(KeywordsListe);
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, [reset]);

  return (
    <KeywordsLayout>
      <StyledOpenSentence>
        Fusing Technical Expertise with Creative Content Creation
      </StyledOpenSentence>
      <KeywordsContainer>
        {transitions((style, item) => (
          <TransitionsItem style={style}>{item}</TransitionsItem>
        ))}
      </KeywordsContainer>
    </KeywordsLayout>
  );
}
