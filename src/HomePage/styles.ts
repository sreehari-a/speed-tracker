export default function styles() {
  return {
    container: {
      width: "100%",
      color: "#000",
    },

    formWrapper: {
      width: "100%",
      "& .ant-input,.ant-input-number": {
        width: "35rem",
        lineHeight: "2rem",
        borderRadius: "3px",
        "&:hover": {
          borderColor: "#40a9ff",
        },
        "&::placeholder": {
          color: "#848484",
        },
      },
      "& .ant-collapse-header.ant-collapse-header": {
        alignItems: "center",
        "& .ant-input": {
          width: "auto",
        },
      },
      "& table": {
        fontFamily: "arial, sans-serif",
        borderCollapse: "collapse",
        width: "90%",
        margin: 'auto',
      },
      "& td,th": {
        border: "1px solid #dddddd",
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
