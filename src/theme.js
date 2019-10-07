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
      padding: "10px",
      margin: "auto",
      textAlign: "center",
      height: "350px",
      width: "700px",
      overflow: "hidden",
      backgroundColor: "white",
      fontFamily: "Dosis, san-serif",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      justifyContent: "center",
      border: "1px dashed #39393970",
      boxShadow: "0px 2px 3px 0px #39393930"
    },
    descript: {
      textAlign: "center",
      margin: "40px 30px 10px 30px"
    },
    image: {
      width: "300px",
      borderRadius: "50%",
      margin: "40px 20px 40px 20px"
    },
    button: {
      fontFamily: "Dosis",
      fontWeight: "bold"
    },
    appIcon: {
      margin: "auto",
      "&:hover": {
        color: "#393939"
      }
    }
  }
});

export default theme;
