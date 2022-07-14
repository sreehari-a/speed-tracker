import { withStyles } from '@material-ui/core';
import React from 'react';
import { ThemeContext } from '../App';

export default function withTheme(component: React.ComponentType<any>, styles: any): (props: any) =>JSX.Element {
  return (props: any)=> {
    const theme = React.useContext(ThemeContext);
    const Styled = withStyles(() => styles(theme))(component);
    Styled.displayName = component.displayName || component.name;
    return (
    <Styled {...props} />
  )};
}