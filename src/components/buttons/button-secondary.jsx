import * as React from 'react';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';

function ButtonStyles(minWidth='auto', minHeight=35, fontSize= {xs: 10, sm: 12, md: 14}, paddingInline=1, paddingBlock=1) {
  return {
    backgroundColor: '#fff',
    borderRadius: 3,
    fontFamily: "Poppins_600SemiBold",
    fontSize: fontSize,
    color: grey[900],
    '&:hover': {
      backgroundColor: grey[700],
      color: '#fff',
    },
    minHeight: minHeight,
    minWidth: minWidth,
    paddingInline: paddingInline,
    paddingBlock: paddingBlock,
  }
}

export default function ButtonSecondary(props) {
	return (
		<Button variant="contained"
			sx={ButtonStyles(props.minWidth, props.minHeight, props.fontSize, props.paddingInline, props.paddingBlock )}
			onClick={props.onClick}
		>
			{props.children}
		</Button>
	);
}