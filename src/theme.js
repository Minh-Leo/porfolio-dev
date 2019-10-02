import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#CC7385",
      main: "#F52F57",
      dark: "#A20021",
      contrastText: "#FFFFFF"
    },
    secondary: {
      light: "#F9C097",
      main: "#F79D5C",
      dark: "#71482A",
      contrastText: "#393939"
    },
    textPrimary: "#FFFFFF",
    textSecondary: "#393939"
  },
  spreadIt: {
    // title: {
    //   float: "right",
    //   margin: "10px 10px 10px 30px"
    // },
    containerPage: {
      flexGrow: 1,
      margin: "30px 10px 10px 10px",
      maxWidth: "1280px"
      // backgroundColor: "aqua"
    },
    paper: {
      padding: 0,
      textAlign: "center",
      height: "350px",
      overflow: "hidden",
      backgroundColor: "white",
      fontFamily: "Dosis, san-serif"
      // fontStyle: "italic"
    },
    button: {
      fontFamily: "Dosis",
      fontWeight: "bold"
    }
  }
});

export default theme;
