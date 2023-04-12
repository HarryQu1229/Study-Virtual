import { Box, Stack, Typography } from "@mui/material";

{
  /* best height and width:
            width: "18%",
            height: "18%",
     */
}

const AssetTypeButton = ({ amount, title, onClick, shouldHighLight }) => {
  return (
    <Stack
      height={"100%"}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      onClick={onClick}
      spacing={"5%"}
      sx={{
        backgroundColor: shouldHighLight
          ? "#6806F9"
          : "rgba(255, 255, 255, .2)",
        backdropFilter: "blur(5px)",
        borderRadius: "10px",
        textAlign: "center",
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Box>
        <Typography variant={"h1"} color={"#fff"}>
          {amount}
        </Typography>
      </Box>
      <Box>
        <Typography variant={"h3"} color={"#fff"} fontWeight={500}>
          {title}
        </Typography>
      </Box>
    </Stack>
  );
};

export default AssetTypeButton;