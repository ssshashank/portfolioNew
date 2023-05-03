import classNames from "classnames";
import "./navbar.css";
import Sidebar from "@components/sidebar/sidebar";
import { motion } from "framer-motion";
import { useState } from "react";
import HomeImage from "@assets/images/house.png";
import HomeSidebarImage from "@assets/images/homeSidebar.png";

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
	return (
		<div>
			<nav className={navClass}>
				<div className='logo'>
					<a href='#'>
						<motion.img
							className='homeIcon'
							src={!showSidebar ? HomeImage : HomeSidebarImage}
							width={45}
						/>
						<span className='overlay'>
							<span className='text'>S</span>
						</span>
					</a>
				</div>

				<div className='menu'>
					<input type='checkbox' id='checkbox4' className={checkBoxClass} />
					<label htmlFor='checkbox4'>
						<motion.div
							whileHover={{
								rotate: "90deg",
								transition: {
									duration: 1,
									damping: 5,
									mass: 0.5,
									type: "spring",
									bounce: 0.25,
								},
							}}
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
			</nav>
			<Sidebar showSidebar={showSidebar} toggleSidebar={setSidebar} />
		</div>
	);
};

export default Navbar;
