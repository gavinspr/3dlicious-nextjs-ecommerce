import { mode } from "@chakra-ui/theme-tools";
import { extendTheme, ThemeComponentProps } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: (props: ThemeComponentProps) => ({
      css: {
        outline: " none",
        boxShadow: " none",
        _focus: {
          outline: "none",
        },
      },
      body: {
        padding: 0,
        margin: 0,
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
      a: {
        color: "inherit",
      },
    }),
  },
});
