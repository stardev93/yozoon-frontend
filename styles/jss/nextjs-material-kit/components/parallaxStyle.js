const parallaxStyle = (theme) => ({
  parallax: {
    height: "110vh",
    maxHeight: "1200px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    marginTop: '60px'
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
  small: {
    height: "380px",
  },
  parallaxResponsive: {
    [theme.breakpoints.down("md")]: {
      minHeight: "660px",
    },
  },
});

export default parallaxStyle;
