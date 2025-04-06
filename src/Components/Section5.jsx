import { Box, Link, List, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import qr from "../assets/qrcode.jpg";

const Section5 = () => {
  const link =
    "https://docs.google.com/forms/d/e/1FAIpQLSdM1uafKvhkxFMHHYW-i8ezhLIYeRrlVzad3SzL4HwQuKaAAg/viewform";
  const [hover, setHover] = useState(false);

  return (
    <>
      <Box
        maxWidth={"1150px"}
        mx="auto"
        mt={{ sm: 4, md: 4 }}
        p={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="justify"
        color="primary"
      >
        <Typography variant="h5"
        fontWeight={800}
        mt={2}
        sx={{
          background: "linear-gradient(45deg, #2196F3, #00BCD4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        textAlign={"center"} fontSize={'1.5rem'}>REGISTER AND PAY HERE</Typography>
        
        <Box
          w="100%"
          mt={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >

          <Box
          component="img"
          src={qr}
          alt="QR Code"
          sx={{ width: '250px', height: 'auto' }}
          cursor='pointer'
          position={'relative'}
        />
         {hover && (
          <Box  position='absolute' >
            <Link
              bgcolor={'white'}
              p={2}
              borderRadius={2}
              boxShadow={2}
              href={link}
              target="_blank"
              rel="noopener"
              underline="hover"
              color="primary"
            >
              {`${link.substring(0,15)}...`}
            </Link>
          </Box>
        )}
        </Box>
      </Box>
    </>
  );
};

export default Section5;
