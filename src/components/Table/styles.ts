
export default function styles(colors: any) {
  return {

    container: {
      "& table": {
        fontFamily: "arial, sans-serif",
        borderCollapse: "collapse",
        width: "90%",
        margin: 'auto',
      },
      "& td,th": {
        border: `1px solid ${colors.primary}`,
        textAlign: "left",
        padding: "8px",
      },
    },
    formItem: {
      margin: "0.625rem",
      display: 'flex',
      justifyContent: 'center'
    },
  };
}
