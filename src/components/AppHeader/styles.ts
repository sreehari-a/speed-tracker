export default function styles(colors: any) {
  return {
    appHeader: {
      display: "flex",
      justifyContent: "center",
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
