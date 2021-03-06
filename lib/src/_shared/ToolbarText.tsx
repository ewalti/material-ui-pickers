import * as React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core';
import { ExtendMui } from '../typings/extendMui';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles, WithStyles } from '@material-ui/core/styles';

export interface ToolbarTextProps extends ExtendMui<TypographyProps>, WithStyles<typeof styles> {
  selected: boolean;
  label: string;
}

// TODO make a styled(Typography) when updated to material-ui
const ToolbarText: React.FunctionComponent<ToolbarTextProps> = ({
  classes,
  selected,
  label,
  className = null,
  ...other
}) => (
  <Typography
    className={clsx(classes.toolbarTxt, className, {
      [classes.toolbarBtnSelected]: selected,
    })}
    {...other}
  >
    {label}
  </Typography>
);

(ToolbarText as any).propTypes = {
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  classes: PropTypes.any.isRequired,
  className: PropTypes.string,
  innerRef: PropTypes.any,
};

export const styles = (theme: Theme) => {
  const textColor =
    theme.palette.type === 'light'
      ? theme.palette.primary.contrastText
      : theme.palette.getContrastText(theme.palette.background.default);

  return {
    toolbarTxt: {
      color: fade(textColor, 0.54),
    },
    toolbarBtnSelected: {
      color: textColor,
    },
  };
};

export default withStyles(styles, { name: 'MuiPickersToolbarText' })(ToolbarText);
