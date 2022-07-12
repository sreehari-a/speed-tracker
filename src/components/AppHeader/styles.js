import Logo from "../../images/blog-logo.png";

export default function styles() {
  return {
    appHeader: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      height: "5rem",
      background: "transparent",
      color: '#000',
      borderBottom: `.1rem solid #efefef`,
      "& >span": {
        margin: "auto",
        fontSize: "2rem",
      },
      position: "relative",
    },
    logo: {
      backgroundImage: `url(${Logo})`,
      height: "10rem",
      width: "10rem",
      backgroundSize: "cover",
      borderRadius: "50%",
      border: `0.5rem solid #fff`,
      position: "absolute",
      left: 0,
    },
  };
}
