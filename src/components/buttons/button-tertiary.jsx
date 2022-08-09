import * as React from 'react';
import Button from '@mui/material/Button';
import { indigo } from '@mui/material/colors';

function ButtonStyles(minWidth='auto', minHeight=35, fontSize= {xs: 12,  md: 14}) {
  return {
    backgroundColor: '#16151A',
    fontFamily: "Poppins_600SemiBold",
    fontSize: fontSize,
    color: indigo[500],
    '&:hover': {
      backgroundColor: '#16151A',
      color: '#fff',
    },
    minHeight: minHeight,
    minWidth: minWidth,
  }
}

export default function ButtonTertiary(props) {
	return (
		<Button variant="contained"
			sx={ButtonStyles(props.minWidth, props.minHeight, props.fontSize)}
			onClick={props.onClick}
      disableElevation
      disableRipple
		>
			{props.children}
		</Button>
	);
}