// import colors from "../colors";
import BgPhoto from '../images/lightbg.webp';


export default function styles(colors: any) {
  return {
    appRoot: {
      height: '100vh',
      background: colors.background,
      // backgroundImage: `url(${BgPhoto})`,
      backgroundSize: 'cover'
    },
    app: {
      height: 'calc(100% - 5rem)',
      color: colors.textColor,
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
