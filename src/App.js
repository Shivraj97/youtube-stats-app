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
  const [open, isOpen] = React.useState(false);
  const [value, setValue] = React.useState([null, null]);
  const [summaryDate, setSummaryDate] = React.useState(() => {
    const [formattedStartDate, formattedEndDate] = getFormattedDate([
      new Date(),
      new Date(),
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
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    let startValue =
      value[0] && format(value[0], "yyyy-MM-dd", { locale: enUS });
    let endValue = value[1] && format(value[1], "yyyy-MM-dd", { locale: enUS });
    console.log("startValue", startValue);
    console.log("endValue", endValue);
    getData(startValue, endValue);
  }, [open]);

  // console.log({ stats });
  console.log("summarydate", summaryDate);
  console.log("value", value);

  return (
    <ThemeProvider theme={theme}>
      <Header stats={stats} />
      <SubHeader
        stats={stats}
        setStats={setStats}
        value={value}
        setValue={setValue}
        summaryDate={summaryDate}
        setSummaryDate={setSummaryDate}
        open={open}
        isOpen={isOpen}
      />
    </ThemeProvider>
  );
}

export default App;
