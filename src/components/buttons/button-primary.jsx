import * as React from 'react';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { padding } from '@mui/system';

function ButtonStyles(minWidth='auto', minHeight=35, fontSize= {xs: 10, sm: 12, md: 14}, paddingInline=1, paddingBlock=1 ) {
  return {
    backgroundColor: '#637bfe',
    borderRadius: 3,
    fontFamily: "Poppins_600SemiBold",
    textDecoration:'none',
    fontSize: fontSize,
    '&:hover': {
      backgroundColor: grey[700],
    },
    minHeight: minHeight,
    minWidth: minWidth,
    paddingInline: paddingInline,
    paddingBlock: paddingBlock,
  }
}

export default function ButtonPrimary(props) {
	return (
		<Button variant="contained"
      disabled={props.disabled}
      type={props.type}
			sx={ButtonStyles(props.minWidth, props.minHeight, props.fontSize, props.paddingInline, props.paddingBlock )}
			onClick={props.onClick}
		>
			{props.children}
		</Button>
	);
}