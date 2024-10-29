import { useTransition } from "@react-spring/web";
import { useCallback, useEffect, useRef, useState } from "react";
import { animated } from "@react-spring/web";
import { KeywordsContainer } from "./Keywords.styles";

const KeywordsListe = [
  "SEO",
  "SEA",
  "Social Media",
  "Scrum",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
];

export default function Keywords() {
  const ref = useRef([]);
  const [word, setWord] = useState([]);
  const transitions = useTransition(word, {
    from: {
      scale: 1,
      color: "#42f5d7",
    },
    enter: [{ scale: 3, color: "#f542dd" }],
    leave: [{ scale: 7, color: "#42f55d" }],
    trail: 200,
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
    <KeywordsContainer>
      <h2>Fusing Technical Expertise with Creative Content Creation</h2>
      {transitions((style, item) => (
        <animated.div
          style={{
            ...style,
            display: "inline-block",
            margin: "0 10px",
            padding: "100px",
          }}
        >
          {item}
        </animated.div>
      ))}
    </KeywordsContainer>
  );
}
