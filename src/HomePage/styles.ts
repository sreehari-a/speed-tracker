export default function styles(colors: any) {
  return {
    container: {
      width: "100%",
      color: colors.textColor,
    },

    formWrapper: {
      width: "100%",
      "& .ant-input,.ant-input-number": {
        width: "35rem",
        lineHeight: "2rem",
        borderRadius: "3px",
        "&:hover,:focus": {
          borderColor: colors.primaryDark,
        },
        "&::placeholder": {
          color: "#7c2424",
        },
        background: 'transparent',
        border: `1px solid ${colors.primary}`,
      },
      '& .ant-input-number-input::placeholder': {
        color: "#7c2424",
      },
      "& .ant-collapse-header.ant-collapse-header": {
        alignItems: "center",
        "& .ant-input": {
          width: "auto",
        },
      },
      '& .ant-btn': {
        background: colors.primary,
        color: '#fff',
        "&:hover": {
          background: colors.primaryDark,
        },
      },
    },
    formItem: {
      margin: "0.625rem",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

    },
    aboutText: {
      color: colors.primary,
      textAlign: 'center',
      fontSize: '20px'
    },
    label: {
      width: '35rem',
    }
  };
}
