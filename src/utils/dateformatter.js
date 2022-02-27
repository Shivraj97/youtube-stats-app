import { format } from "date-fns";
import { enUS } from "date-fns/locale";

const getFormattedDate = (newValue) => {
  if (newValue[0] && newValue[1]) {
    let startDate =
      newValue[0] && format(newValue[0], "LLL d yyyy", { locale: enUS });
    let endDate =
      newValue[1] && format(newValue[1], "LLL d yyyy", { locale: enUS });
    startDate = startDate.split(" ");
    endDate = endDate.split(" ");
    let formattedStartDate = "";
    let formattedEndDate = "";
    if (endDate[2] === startDate[2]) {
      formattedStartDate = startDate[0] + " " + startDate[1];
    } else {
      formattedStartDate =
        startDate[0] + " " + startDate[1] + " " + startDate[2];
    }
    if (endDate[0] === startDate[0]) {
      formattedEndDate = endDate[1] + " " + endDate[2];
    } else {
      formattedEndDate = endDate[0] + " " + endDate[1] + " " + endDate[2];
    }
    return [formattedStartDate, formattedEndDate];
  } else {
    return ["", ""];
  }
};

export default getFormattedDate;
