export default function styles() {
  return {
    container: {
      "& div": {
        /* Finally, a use for "groove"! */
        border: "12px groove rebeccapurple",

        display: "table-cell",
        borderRadius: "999px",
        animation: "$spin 15s linear infinite",
      },
      display: 'flex',
      justifyContent: 'center'
    },
    "@keyframes spin": {
      '0%': { transform: "rotate(0deg)" },
      '100%': { transform: "rotate(360deg)" },
    },
    loaderText: {
      textAlign: 'center'
    }
  };
}
