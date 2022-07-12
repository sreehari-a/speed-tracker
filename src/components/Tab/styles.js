export default function styles() {
  return {
    tabContainer: {
      height: "fit-content",
      "& .ant-tabs-tab": {
        fontSize: "1.5rem",
        padding: "10px 20px",
        margin: 0,
      },
      "& .ant-tabs": {
        color: "white",
      },
      "& .ant-tabs-tab-active .ant-tabs-tab-btn": {
        color: "#40c1d2",
      },
    },
  };
}
