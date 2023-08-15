import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const HoverText = () => {
  const [hovered, setHovered] = useState(false);

  const underlineVariants = {
    initial: { width: 0, opacity: 0 },
    hover: { width: "100%", opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <Box>
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          maxWidth: 'fit-content',
          flexDirection:'column'
        }}
      >
        <Text>Hover over</Text>
        <motion.span
          initial={hovered ? "initial" : "hover"}
          animate={hovered ? "hover" : "initial"}
          variants={underlineVariants}
          style={{
            display: "inline-block",
            borderBottom: "2px solid blue",
          }}
        />
      </span>
    </Box>
  );
};

export default HoverText;
