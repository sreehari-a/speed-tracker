import Logo from "../../images/speed tracker logo.jpg";
export default function styles(colors: any) {
  return {
    appHeader: {
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
      width: "100%",
      height: "5rem",
      background: "transparent",
      color: colors.primary,
      borderBottom: `.1rem solid ${colors.primary}`,
      "& >span": {
        margin: "auto",
        fontSize: "2rem",
      },
      position: "relative",
    },
    logo: {
      backgroundImage: `url(${Logo})`,
      height: "3.5rem",
      width: "12rem",
      backgroundSize: "cover",
      position: "absolute",
      left: 0,
    },
    buttonGroup: {
      position: 'absolute',
      right: 0,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      '& .ant-btn': {
        margin: '0 5px',
        background: colors.primary,
        color: 'white',
      }
    }
  };
}
