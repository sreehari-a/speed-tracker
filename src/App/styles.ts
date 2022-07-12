export default function styles() {
  return {
    appRoot: {
      height: '100vh',
      background: '#fff',
    },
    app: {
      height: 'calc(100% - 5rem)',
      color: '#000',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      zIndex: -1,
      overflow: 'auto',

      "@media (max-width: 720px)": {
        padding: "5.625rem 3.625rem",
      }
    },
  };
}
