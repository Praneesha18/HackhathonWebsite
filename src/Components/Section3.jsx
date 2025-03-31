import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'

const Section3 = ({currentTheme}) => {
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
      id="instructions"
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
        INSTRUCTIONS TO BE FOLLOWED
      </Typography>

      <List component="ol" sx={{ marginTop: "10px", paddingLeft: 2 }}>
        {[
          "The hackathon will run non-stop for 24 hours from April 18th, 9:00 AM to April 19th, 9:00 AM.",
          "Problem statements will be released 7-10 days in advance via the official WhatsApp group.",
          "The hackathon follows predefined themes, but participants can also work on open-theme projects or provided problem statements.",
          "Each team must have 3-5 members.",
          "Each team member must register individually",
          "Participants must bring their own laptops and chargers.",
          "Internet will be provided, but teams are encouraged to have a hotspot as a backup.",
          "Accommodation is to be arranged by participants themselves.",
          "Judges' decisions are final and must be respected by all participants.",
          "Plagiarism is strictly prohibited — all projects must be original.",
          "Mentorship and technical support will be available throughout the event.",
          "Code of Conduct: Participants must maintain a professional, respectful, and collaborative environment. Any form of misconduct may lead to disqualification."
        ].map((item, index) => (
          <ListItem
            key={index}
            sx={{ display: "list-item", listStyleType: "upper-roman" }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </Box>
   </>
  )
}

export default Section3