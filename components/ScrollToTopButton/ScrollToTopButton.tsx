import { useState, useEffect } from "react";
import { Box, Button, IconButton } from "@chakra-ui/react";
import { FaArrowUp, FaChevronUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      display={showButton ? "block" : "none"}
      position="fixed"
      bottom="4"
      right="4"
    >
      <IconButton
        aria-label="Scroll to top"
        icon={<FaChevronUp />}
        size="md"
        onClick={handleScrollToTop}
        bg="green.500"
        color="white"
        _hover={{ bg: "green.600" }}
        _active={{ bg: "green.700" }}
      />
    </Box>
  );
};

export default ScrollToTopButton;
