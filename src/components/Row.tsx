import styled, { css } from "styled-components";

interface RowProps {
  $direction?: "horizontal" | "vertical";
}

const Row = styled.div<RowProps>`
  display: flex;

  ${({ $direction = "vertical" }) =>
    $direction === "horizontal"
      ? css`
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `
      : css`
          flex-direction: column;
          gap: 1.6rem;
        `}
`;

export default Row;
