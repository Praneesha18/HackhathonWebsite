import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";

const Section2 = ({ colorTheme }) => {
  return (
    <Box
      maxWidth={"1150px"}
      mx="auto"
      mt={{ sm: 4, md: 4 }}
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      textAlign="justify"
      color="primary"
    >
      <Typography
        variant="h4"
        fontWeight={800}
        mt={2}
        sx={{
          background: "linear-gradient(45deg, #2196F3, #00BCD4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        textAlign={"center"}
      >
        HACKATHON THEMES
      </Typography>

      <List component="ol" sx={{ marginTop: "10px", paddingLeft: 2 }}>
        {[
          "Waste Reduction Solutions through AI",
          "Eco-friendly Business and Product Recommendations",
          "Disaster Preparedness and Relief Optimization",
          "Sustainable Travel and Transportation",
          "Food Waste Management and Optimization",
          "Green Building and Design Solutions",
          "Personalized Sustainability Education",
          "Mental Health and Well-being Support",
          "Others - Your Interested Domains",
        ].map((item, index) => (
          <ListItem
            key={index}
            sx={{ display: "list-item", listStyleType: "decimal" }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Section2;
