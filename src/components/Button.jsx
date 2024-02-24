"use client";
import { Button as LibButton } from "@material-tailwind/react";

function Button({ children, ...props }) {
	return <LibButton {...props}>{children}</LibButton>;
}

export default Button;
