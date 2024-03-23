import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <CircularProgress />
      </Box>
    </>
  );
};

export default Loading;
