import * as React from 'react';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';

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
			sx={{
        backgroundColor: '#637bfe',
        borderRadius: 3,
        fontFamily: "Poppins_600SemiBold",
        textDecoration:'none',
        fontSize: fontSize,
        '&:hover': {
          backgroundColor: grey[700],
        },
        minHeight: props.minHeight,
        minWidth: props.minWidth,
      }}
			onClick={props.onClick}
		>
			{props.children}
		</Button>
	);
}