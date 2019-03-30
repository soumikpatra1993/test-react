import React from "react";
import './Navbar.css';
const Navbar = props => (
	<form onSubmit={props.getInput}>
		<input className = "Input-bar" type="text"  placeholder=" Search by Campaign name...."/>

		<button>Click</button>
	</form>
);

export default Navbar;
