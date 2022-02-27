import * as React from "react";
import { Typography, Box, Divider } from "@mui/material";
import IIcon from "../../../assets/i.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import Spinner from "../../Spinner/Spinner";

const Stats = ({ stats, loading, error }) => {
  //for Revenue
  const data = stats?.revenueDetails?.estimatedRevenueTrend;
  const graph = stats?.revenueDetails?.estimatedRevenueTrend?.data;

  //for Reach and Engagement
  const viewDetails = stats?.reachAndEngagementDetails?.viewsTrend;
  const viewGraph = stats?.reachAndEngagementDetails?.viewsTrend?.data;

  //for Audience
  const subTotalDetails =
    stats?.audienceDetails?.viewsSubscriberVsNonSubscribersTrend;
  const subTotalgraph =
    stats?.audienceDetails?.viewsSubscriberVsNonSubscribersTrend?.data;
  // console.log({ graph });

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const labels = data?.data?.map((date) => {
    let formattedLabel = format(new Date(date.date), "LLL dd", {
      locale: enUS,
    });
    return formattedLabel;
  });
  const viewLabel = viewDetails?.data?.map((viewDate) => {
    let formattedLabel = format(new Date(viewDate.date), "LLL dd", {
      locale: enUS,
    });
    return formattedLabel;
  });
  const subTotalLabels = subTotalDetails?.data?.map((subTotalDate) => {
    let formattedLabel = format(new Date(subTotalDate.date), "LLL dd", {
      locale: enUS,
    });
    return formattedLabel;
  });

  const Linedata = {
    labels: labels,
    datasets: [
      {
        data: graph?.map((data) => data?.value1),
        borderColor: "#31E498",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const Linedata2 = {
    labels: viewLabel,
    datasets: [
      {
        data: viewGraph?.map((data) => data?.value1),
        borderColor: "#31E498",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const Linedata3 = {
    labels: subTotalLabels,
    datasets: [
      {
        data: subTotalgraph?.map((data) => data?.value1),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        data: subTotalgraph?.map((data) => data?.value2),
        fill: false,
        borderColor: "#FF5C00",
      },
    ],
  };

  // console.log({ Linedata });
  // console.log({ Linedata2 });
  // console.log({ Linedata3 });

  return (
    <>
      <Box m={"50px 20px 20px 20px"}>
        <Typography variant={"subtitle1"} color={"#1D1D1F"} fontWeight={500}>
          Revenue
        </Typography>
        <Typography variant={"subtitle1"} color={"#9A9A9A"}>
          jan 3 - 9,2022
        </Typography>
        <Box
          style={{
            height: "264px",
            background: " #FFFFFF",
            boxShadow:
              "-6px -6px 12px rgba(244, 244, 244, 0.43), 6px 6px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
            marginTop: "5%",
            padding: "6%",
          }}
        >
          <Typography
            fontStyle={"normal"}
            fontSize={15}
            fontWeight={500}
            color={"#9A9A9A"}
          >
            Estimated Revenue
          </Typography>
          <Typography fontWeight={600} fontSize={24} color={"#000000"}>
            {data?.value}M
          </Typography>
          <Typography fontSize={12} color={"#11AC6A"}>
            +{data?.change?.percentage}%
            <img src={IIcon} alt={""} style={{ marginLeft: "5px" }} />
          </Typography>
          <Box
            borderRadius={4}
            bgcolor={"#EBFFF7"}
            color={"#000000"}
            width={"max-content"}
            p={"3px"}
            ml={"14%"}
          >
            <Typography fontSize={10}>{data?.change?.info}</Typography>
          </Box>

          <Divider />
          {!loading ? <Line options={options} data={Linedata} /> : <Spinner />}
        </Box>
      </Box>
      <Box m={"50px 20px 20px 20px"}>
        <Typography variant={"subtitle1"} color={"#1D1D1F"} fontWeight={500}>
          Reach and Engagement
        </Typography>
        <Typography variant={"subtitle1"} color={"#9A9A9A"}>
          jan 3 - 9,2022
        </Typography>
        <Box
          style={{
            height: "264px",
            background: " #FFFFFF",
            boxShadow:
              "-6px -6px 12px rgba(244, 244, 244, 0.43), 6px 6px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
            marginTop: "5%",
            padding: "6%",
          }}
        >
          <Typography
            fontStyle={"normal"}
            fontSize={15}
            fontWeight={500}
            color={"#9A9A9A"}
          >
            Views
          </Typography>
          <Typography fontWeight={600} fontSize={24} color={"#000000"}>
            {viewDetails?.change?.value}M
          </Typography>
          <Typography fontSize={12} color={"#11AC6A"}>
            +{viewDetails?.change?.percentage}%
            <img src={IIcon} alt={""} style={{ marginLeft: "5px" }} />
          </Typography>
          <Divider />
          {!loading ? <Line options={options} data={Linedata2} /> : <Spinner />}
        </Box>
      </Box>
      <Box m={"50px 20px 20px 20px"}>
        <Typography variant={"subtitle1"} color={"#1D1D1F"} fontWeight={500}>
          Audience
        </Typography>
        <Typography variant={"subtitle1"} color={"#9A9A9A"}>
          jan 3 - 9,2022
        </Typography>
        <Box
          style={{
            height: "264px",
            background: " #FFFFFF",
            boxShadow:
              "-6px -6px 12px rgba(244, 244, 244, 0.43), 6px 6px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
            marginTop: "5%",
            padding: "6%",
          }}
        >
          <Typography
            fontStyle={"normal"}
            fontSize={15}
            fontWeight={500}
            color={"#9A9A9A"}
          >
            Subscriber views vs total views
          </Typography>
          <Typography fontWeight={600} fontSize={24} color={"#000000"}>
            {subTotalDetails?.change?.value}M
          </Typography>
          <Typography fontSize={12} color={"#11AC6A"}>
            +{subTotalDetails?.change?.percentage}%
            <img src={IIcon} alt={""} style={{ marginLeft: "5px" }} />
          </Typography>
          <Divider />
          {!loading ? <Line options={options} data={Linedata3} /> : <Spinner />}
        </Box>
      </Box>
    </>
  );
};

export default Stats;
