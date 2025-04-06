import { Box, Button, Typography, useScrollTrigger } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsIcon from "@mui/icons-material/Groups";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import React from "react";

const Section1 = ({ currentTheme }) => {


  return (
    <>
      <Box
        maxWidth={"1150px"}
        mx="auto"
        mt={{ sm: 6, md: 8 }}
        p={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        color="text.primary"
      >
        <Typography
          variant="h5"
          fontWeight={600}
          gutterBottom
          textAlign={"center"}
          mt={{sx:5,md:0}}
        >
          Are you ready to innovate and solve real-world challenges? Join us at
        </Typography>
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
          BUILD-BHARAT THROUGH AI
        </Typography>
      </Box>
      <Box
        maxWidth={"1150px"}
        mx="auto"
        p={3}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        textAlign="justify"
      >
        <Typography fontSize={16}>
          A National-Level 24-Hour Hackathon Organized by the Department of ITCA
          & CSSE and CODEIAM, this hackathon is your chance to showcase your
          skills, work on innovative solutions, and compete with the best minds
          across the country.
        </Typography>

        {/* Event Details */}
        <Box mt={3} width="100%" display="flex" flexDirection="column" gap={2}>
          {[
            {
              icon: <CalendarMonthIcon color="primary" />,
              text: "Apr 18th to 19th",
            },
            { icon: <AccessAlarmIcon color="primary" />, text: "9 AM to 9 AM" },
            {
              icon: <GroupsIcon color="primary" />,
              text: "Team size: 3-5 members",
            },
            {
              icon: <HowToRegIcon color="primary" />,
              text: "Registration Fee: ₹399 per person",
            },
          ].map((item, index) => (
            <Box key={index} display="flex" alignItems="center" gap={1}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateX(5px)",
                  },
                }}
              >
                <Box
                  sx={{
                    bgcolor: "rgba(33, 150, 243, 0.1)",
                    borderRadius: "50%",
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="body2">{item.text}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Button
          variant="contained"
          sx={{ 
            p: 5,
            py:1,
            borderRadius: 2,
            mt:3,
            background: 'linear-gradient(45deg, #1a237e, #3949ab)',
            boxShadow: '0 4px 10px rgba(26, 35, 126, 0.25)',
          }}
        >
          Register
        </Button>
      </Box>
    </>
  );
};

export default Section1;
