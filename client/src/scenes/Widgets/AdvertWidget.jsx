import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://memeify-fullstack-backend.onrender.com/assets/PORTFOLIO.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Đorđe Vasilevski</Typography>
        <Typography color={medium}>portfolio-vasilevski.netlify.app</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Do you need a web developer who can work collaboratively with your team
        and communicate effectively with stakeholders? As a skilled communicator
        and team player, I can ensure that your project is delivered on time,
        within budget, and to your exact specifications. Feel free to send an
        email: djordje.vasilevski95@gmail.com
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
