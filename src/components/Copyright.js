import { Typography, Link } from "@mui/material";

const REACT_APP_WEBSITE_NAME =
  process.env.REACT_APP_WEBSITE_NAME || "Your Website";

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href={REACT_APP_WEBSITE_NAME}>
        {REACT_APP_WEBSITE_NAME}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
