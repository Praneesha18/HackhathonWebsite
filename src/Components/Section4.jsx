import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'

const Section4 = () => {
  return (
    <>
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
      id="perks"
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
        PERKS OF PARTICIPATING
      </Typography>

      <List component="ul" sx={{ marginTop: "10px", paddingLeft: 2 }}>
        {[
                   "1 Lakh cash prize pool for winning teams.",
                   "Lunch and dinner on April 18th, and breakfast on April 19th will be provided.",
                   "Refreshments will be available throughout the event.",
                   "Participation certificates for all.",
                   "Internship and job opportunities (including PPOs) at the discretion of partnering companies.",
                   "Potential collaboration opportunities with companies to further develop your project.",
                   "Networking opportunities with industry leaders, startup founders, and AI experts.",
        ].map((item, index) => (
          <ListItem
            key={index}
            sx={{ display: "list-item", listStyleType: "disc" }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </Box>
    </>
  )
}

export default Section4