import * as React from "react";
import Stats from "../Stats/Stats";
import { Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { formatDistanceToNowStrict } from "date-fns";

const SubHeader = ({ stats }) => {
  const data = stats?.summary;
  const [value, setValue] = React.useState([null, null]);

  console.log({ value });

  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} m={"30px 24px"}>
        <Box>
          <Box>
            <Typography
              variant={"subtitle1"}
              color={"#1D1D1F"}
              fontWeight={500}
            >
              Summary
            </Typography>
          </Box>
          <Box>
            {/* <Typography
              variant={"subtitle1"}
              color={"#9A9A9A"}
              style={{ whiteSpace: "pre" }}
            >
              Jan 3 - 9,2022
            </Typography> */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateRangePicker
                startText="Start Date"
                endText="End Date"
                format="DD-MM"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <>
                    <TextField {...startProps} style={{ width: "38%" }} />
                    <Box sx={{ mx: 1 }}> - </Box>
                    <TextField {...endProps} style={{ width: "38%" }} />
                  </>
                )}
              />
            </LocalizationProvider>
          </Box>
        </Box>

        <Box>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="Start Date"
              endText="End Date"
              value={value}
              format="DD-MM"
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <>
                  <TextField {...startProps} style={{ width: "38%" }} />
                  <Box sx={{ mx: 1 }}> to </Box>
                  <TextField {...endProps} style={{ width: "38%" }} />
                </>
              )}
            />
          </LocalizationProvider>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        style={{
          height: "90px",
          background: "#FFFFFF",
          boxShadow:
            "-6px -6px 12px rgb(244 244 244 / 43%), 6px 6px 12px rgb(0 0 0 / 10%)",
          borderRadius: "15px",
          margin: "20px",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <Typography
            fontStyle={"normal"}
            fontSize={15}
            fontWeight={500}
            color={"#9A9A9A"}
          >
            Subscribers
          </Typography>
          <Typography fontWeight={600} color={"#000000"}>
            {data?.subscribers}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <Typography
            fontStyle={"normal"}
            fontSize={15}
            fontWeight={500}
            color={"#9A9A9A"}
          >
            Views
          </Typography>
          <Typography fontWeight={600} color={"#000000"}>
            {data?.views}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <Typography
            fontStyle={"normal"}
            fontSize={15}
            fontWeight={500}
            color={"#9A9A9A"}
          >
            Revenue
          </Typography>
          <Typography fontWeight={600} color={"#000000"}>
            {data?.revenue}
          </Typography>
        </Box>
      </Box>
      <Stats stats={stats} />
    </>
  );
};

export default SubHeader;
