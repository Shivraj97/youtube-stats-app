import React from "react";
import Header from "./Components/Header/Header";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/Theme";
import SubHeader from "./Components/Body/SubHeader/SubHeader";
import Axios from "axios";

function App() {
  const [stats, setStats] = React.useState({});

  const getData = async () => {
    try {
      const { data } = await Axios.get(
        `https://qorner-mock-server.herokuapp.com/stats?startDate=2021-01-01&endDate=2021-01-31`
      );
      setStats(data);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  console.log({ stats });

  return (
    <ThemeProvider theme={theme}>
      <Header stats={stats} />
      <SubHeader stats={stats} />
    </ThemeProvider>
  );
}

export default App;
