import React from "react";
import useStyles from "./styles";
import { Avatar, Box } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";

const Header = ({ stats }) => {
  const classes = useStyles();
  const data = stats?.metadata;
  return (
    <Box
      height={"194px"}
      top={0}
      left={0}
      style={{
        background:
          "linear-gradient(359.73deg, #000000 0.25%, rgba(0, 0, 0, 0) 99.77%)",
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        p={"10% 10% 5% 10%"}
      >
        <Box>
          <ArrowBackIcon className={classes.arrowBackIcon} />
        </Box>

        <Box display={"flex"} alignItems={"center"} m={"0 auto"}>
          <Typography variant={"h5"} color={"white"} fontWeight={500}>
            Youtube Stats
          </Typography>{" "}
          <YouTubeIcon className={classes.youtubeIcon} />
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Avatar
          src={data?.thumbnailUrl}
          alt={"dp"}
          style={{ marginRight: "5px", width: "50px", height: "50px" }}
        />

        <Box display={"flex"} flexDirection={"column"}>
          <Typography variant={"h6"} color={"white"}>
            {data?.channelName}
          </Typography>
          <Typography variant={"subtitle2"} color={"white"}>
            {data?.subscribersCount} subscribers
            <span style={{ color: "#ffffff" }}>&nbsp;&#183;&nbsp; </span>
            {data?.videoCount} videos
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
