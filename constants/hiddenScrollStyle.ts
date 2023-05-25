import { css } from "@emotion/react";

export const hiddenScrollStyle = css`
  overflow: auto;
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: transparent transparent; /* For Firefox */
  &::-webkit-scrollbar {
    width: 0.5rem; /* Adjust the width as needed */
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;
