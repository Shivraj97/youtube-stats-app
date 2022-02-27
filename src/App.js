import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Axios from "axios";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

import Header from "./Components/Header/Header";
import getFormattedDate from "./utils/dateformatter";
import { theme } from "./Theme/Theme";
import SubHeader from "./Components/Body/SubHeader/SubHeader";

function App() {
  const [stats, setStats] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [open, isOpen] = React.useState(false);
  const [value, setValue] = React.useState([
    new Date("2021-01-01"),
    new Date("2021-01-31"),
  ]);
  const [summaryDate, setSummaryDate] = React.useState(() => {
    const [formattedStartDate, formattedEndDate] = getFormattedDate([
      new Date("2021-01-01"),
      new Date("2021-01-31"),
    ]);
    return {
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    };
  });

  const getData = async (startDate = "2021-01-01", endDate = "2021-01-31") => {
    try {
      const { data } = await Axios.get(
        `https://qorner-mock-server.herokuapp.com/stats?startDate=${startDate}&endDate=${endDate}`
      );
      setStats(data);
      setLoading(false);
      setError("");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err);
    }
  };

  React.useEffect(() => {
    let startValue =
      value[0] && format(value[0], "yyyy-MM-dd", { locale: enUS });
    let endValue = value[1] && format(value[1], "yyyy-MM-dd", { locale: enUS });
    getData(startValue, endValue);
  }, [open]);

  return (
    <ThemeProvider theme={theme}>
      <Header stats={stats} />
      <SubHeader
        stats={stats}
        value={value}
        setValue={setValue}
        summaryDate={summaryDate}
        setSummaryDate={setSummaryDate}
        open={open}
        isOpen={isOpen}
        loading={loading}
        error={error}
      />
    </ThemeProvider>
  );
}

export default App;
