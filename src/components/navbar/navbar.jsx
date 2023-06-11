import classNames from "classnames";
import NavbarStyleModule from "./navbar.module.css";
import Sidebar from "@components/sidebar/sidebar";
import { motion, spring } from "framer-motion";
import { useState } from "react";
import { Linear, Power3 } from "gsap";

const Navbar = () => {
	const [showSidebar, setSidebar] = useState(false);
	const navClass = classNames(`nav  py-10 box-border z-0`);
	const checkBoxClass = classNames("checkbox4 hidden");
	const hamburgerClass = classNames("hamburger hamburger4");
	const bar1Class = classNames(`bar bar1`);
	const bar2Class = classNames(
		showSidebar ? `barUpdatedState bar2` : "bar bar2"
	);
	const bar3Class = classNames(
		showSidebar ? `barUpdatedState bar3` : "bar bar3"
	);
	const bar4Class = classNames("bar bar4");
	const bar5Class = classNames("bar bar5");
	const translateTitle = {
		initial: { x: -200 },
		final: {
			x: 0,
			transition: {
				duration: 0.8,
				delay: 3,
				ease: Power3.easeOut,
			},
		},
	};
	return (
		<div>
			{/* <nav className={navClass}>
				<div className='logo'>
					
				</div>

				<div className='menu'>
					<input type='checkbox' id='checkbox4' className={checkBoxClass} />
					<label htmlFor='checkbox4'>
						<motion.div
							// whileHover={{
							// 	rotate: "90deg",
							// 	transition: {
							// 		duration: 1,
							// 		damping: 5,
							// 		mass: 0.5,
							// 		type: "spring",
							// 		bounce: 0.25,
							// 	},
							// }}
							whileTap={{ scale: 0.8 }}
							className={hamburgerClass}
							onClick={() => setSidebar((prev) => (prev = !prev))}>
							<span className={bar1Class}></span>
							<span className={bar2Class}></span>
							<span className={bar3Class}></span>
							<span className={bar4Class}></span>
							<span className={bar5Class}></span>
						</motion.div>
					</label>
				</div>
			</nav> */}
			<nav className={NavbarStyleModule.nav}>
				<motion.div
					className={NavbarStyleModule.combineTitle}
					variants={translateTitle}
					initial={"initial"}
					animate={"final"}>
					<p className={NavbarStyleModule.title}>S</p>
					<p className={NavbarStyleModule.titleLines}>sHASHANK</p>
				</motion.div>
			</nav>
			{/* <Sidebar showSidebar={showSidebar} toggleSidebar={setSidebar} /> */}
		</div>
	);
};

export default Navbar;
