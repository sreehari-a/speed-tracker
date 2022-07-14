import { withStyles } from '@material-ui/core/styles';
import hoistNonReactStatics from 'hoist-non-react-statics';
import withForwardRef from './withForwardRef';
import withTheme from './withTheme';

export default function stylize(component: any, style: any): any {
  const Styled = withTheme(component, style);
  hoistNonReactStatics(Styled, component);
  return withForwardRef(Styled);
}
