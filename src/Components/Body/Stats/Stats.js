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

const Stats = ({ stats }) => {
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
  console.log({ graph });

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
        position: "top",
      },
    },
  };

  const labels = graph?.map((date) => date?.date);
  const viewLabel = viewGraph?.map((date) => date?.date);
  const subTotalLabels = subTotalgraph?.map((date) => date?.date);

  const dateMonth = new Date().toLocaleString("en-us", {
    month: "short",
    year: "numeric",
  });
  console.log({ dateMonth });

  const Linedata = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: graph?.map((data) => data?.value1),
        borderColor: " #31E498",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const Linedata2 = {
    viewLabel,
    datasets: [
      {
        label: "Dataset 2",
        data: viewGraph?.map((data) => data?.value1),
        borderColor: " #31E498",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const Linedata3 = {
    subTotalLabels,
    datasets: [
      {
        label: "Dataset 3",
        data: subTotalgraph?.map((data) => data?.value1),
        borderColor: " #31E498",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  console.log({ Linedata });
  console.log({ Linedata2 });
  console.log({ Linedata3 });

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
          <Line options={options} data={Linedata} />
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
          <Line options={options} data={Linedata2} />
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
          <Line options={options} data={Linedata3} />
        </Box>
      </Box>
    </>
  );
};

export default Stats;
