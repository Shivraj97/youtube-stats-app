import * as React from "react";
import Stats from "../Stats/Stats";
import { Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import getFormattedDate from "../../../utils/dateformatter";

const SubHeader = ({
  stats,
  value,
  setValue,
  summaryDate,
  setSummaryDate,
  open,
  isOpen,
  loading,
  error,
}) => {
  const data = stats?.summary;

  const handleDateChange = (newValue) => {
    setValue(newValue);
    const [formattedStartDate, formattedEndDate] = getFormattedDate(newValue);
    setSummaryDate((prevDate) => ({
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    }));
  };

  // console.log({ value });

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
            <Typography>
              {summaryDate
                ? `${summaryDate.startDate} - ${summaryDate.endDate}`
                : ""}
            </Typography>
          </Box>
        </Box>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="Start Date"
              endText="End Date"
              value={value}
              format="DD-MM"
              initialDate={new Date()}
              onChange={(newValue) => {
                handleDateChange(newValue);
              }}
              onClose={(newValue) => {
                isOpen(!open);
              }}
              renderInput={({ inputProps, ...startProps }, endProps) => {
                const initialDate = new Date();
                let range;
                // const range = formatDistanceStrict(
                //   new Date(2015, 0, 2),
                //   new Date(2014, 8, 2)
                // );
                // const startValue = inputProps.value;
                // delete inputProps.value;
                // console.log("startValue", startValue);
                // console.log("endProps", endProps.inputProps.value);
                // const startDate = new Date(startValue);
                // const endDate = new Date(endProps.inputProps.value);
                // console.log("startDate", startDate);
                // console.log("endDate", endDate);
                // const start = startValue && startValue.split("/");
                // const end = endProps && endProps.inputProps.value.split("/");
                // let range;
                // if (start && end.length) {
                //     range = formatDistanceStrict(
                //     new Date(+start[2], +start[1], +start[0]),
                //     new Date(+end[2], +end[1], +end[0])
                //   );
                //   console.log("range1", range);
                // }
                return (
                  <>
                    <TextField
                      {...startProps}
                      inputProps={inputProps}
                      value={`Last ${range ? range : initialDate}`}
                      style={{ width: "90%" }}
                    />
                    {/* <Box sx={{ mx: 1 }}> to </Box>
                  <TextField {...endProps} style={{ width: "38%" }} /> */}
                  </>
                );
              }}
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
      <Stats stats={stats} loading={loading} error={error} />
    </>
  );
};

export default SubHeader;
