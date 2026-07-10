import styled from "styled-components";

type HeadingLevel = "h1" | "h2" | "h3";

interface HeadingProps {
  as?: HeadingLevel;
}

const headingStyles = {
  h1: {
    fontSize: "3rem",
    fontWeight: 600,
  },
  h2: {
    fontSize: "2rem",
    fontWeight: 600,
  },
  h3: {
    fontSize: "2rem",
    fontWeight: 500,
  },
} satisfies Record<
  HeadingLevel,
  {
    fontSize: string;
    fontWeight: number;
  }
>;

const Heading = styled.h1<HeadingProps>`
  font-size: ${({ as = "h1" }) => headingStyles[as as HeadingLevel].fontSize};

  font-weight: ${({ as = "h1" }) => headingStyles[as as HeadingLevel].fontWeight};

  line-height: 1.4;
`;

export default Heading;
