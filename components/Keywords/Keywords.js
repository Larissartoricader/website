import { useCallback, useEffect, useRef, useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import { KeywordsContainer, KeywordsMain } from "./Keywords.styles";

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
  const [items, set] = useState([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#28d79f" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#28b4d7" },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(() => set(["SEO", "Social Media", "JavaScript"]), 2000)
    );
    ref.current.push(setTimeout(() => set(["Scrum", "Next.js", "SEO"]), 5000));
    ref.current.push(
      setTimeout(() => set(["TypeScript", "SEA", "Project Management"]), 8000)
    );
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  return (
    <>
      <h2>A Great Sentence</h2>
      <KeywordsContainer>
        <KeywordsMain>
          {transitions(({ innerHeight, ...rest }, item) => (
            <transitionsItem style={rest} onClick={reset}>
              <animated.div style={{ overflow: "hidden", height: innerHeight }}>
                {item}
              </animated.div>
            </transitionsItem>
          ))}
        </KeywordsMain>
      </KeywordsContainer>
    </>
  );
}
