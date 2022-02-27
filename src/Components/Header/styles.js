import { makeStyles } from "@mui/styles";
import CoverImage from "../../assets/hero-banner.svg";

export default makeStyles((theme) => ({
  youtubeIcon: {
    color: "#FF0302",
    margin: "5px 35px 5px 15px",
    fontSize: "30px",
  },
  arrowBackIcon: {
    color: "#ffffff",
    marginRight: "auto",
  },
  coverContainer: {
    backgroundImage: `url(${CoverImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: 24,
    padding: 24,
  },
}));
