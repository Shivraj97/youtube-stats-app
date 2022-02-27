import * as React from "react";
import Stats from "../Stats/Stats";
import { Typography, Box } from "@mui/material";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import getFormattedDate from "../../../utils/dateformatter";
import numFormatter from "../../../utils/numFormatter";
import ArrowDown from "../../../assets/arrowdown.svg";
import { differenceInDays } from "date-fns";

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
  const [showModal, setShowModal] = React.useState(false);
  const data = stats?.summary;
  const metadata = stats?.metadata;

  const handleDateChange = (newValue) => {
    setValue(newValue);
    const [formattedStartDate, formattedEndDate] = getFormattedDate(newValue);
    setSummaryDate((prevDate) => ({
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    }));
  };

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
              open={showModal}
              startText="Start Date"
              endText="End Date"
              maxDate={new Date()}
              value={value}
              format="DD-MM"
              initialDate={new Date()}
              onChange={(newValue) => {
                handleDateChange(newValue);
              }}
              onClose={(newValue) => {
                isOpen(!open);
                setShowModal(!showModal);
              }}
              renderInput={({ inputProps, ...startProps }, endProps, ref) => (
                <div></div>
              )}
            />
            <Box
              display={"flex"}
              border={"1px solid #DCDCDC"}
              p={"10px"}
              borderRadius={"18px"}
            >
              <Typography onClick={(e) => setShowModal(!showModal)}>
                {value
                  ? `Last ${differenceInDays(value[1], value[0])} days`
                  : "Select Date Range"}
              </Typography>
              <img src={ArrowDown} alt={""} style={{ marginLeft: "10px" }} />
            </Box>
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
            {numFormatter(metadata?.subscribersCount)}
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
            {numFormatter(data?.views)}
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
            {data?.revenue.toLocaleString("en-US", {
              style: "currency",
              currency: "INR",
            })}
            {" lac"}
          </Typography>
        </Box>
      </Box>
      <Stats
        stats={stats}
        loading={loading}
        error={error}
        summaryDate={summaryDate}
      />
    </>
  );
};

export default SubHeader;
