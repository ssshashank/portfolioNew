import classNames from "classnames";
import "./navbar.css";
import Sidebar from "@components/sidebar/sidebar";
import { motion, spring } from "framer-motion";
import { useState } from "react";
import { Elastic } from "gsap";

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
						<motion.svg
							width='100'
							height='9'
							viewBox='0 0 60 9'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<motion.rect
								width='44'
								height='9'
								rx='0'
								fill='#e7e8d1'
								animate={{
									x: [10, -10, 10],
									transition: {
										duration: 1.3,
										ease: "linear",
										repeat: Infinity,
										repeatType: "mirror",
									},
								}}
							/>
							<motion.circle
								cx='55.5'
								cy='4.5'
								r='4.5'
								fill='#e7e8d1'
								animate={{
									opacity: 1,
									scale: 1,
									x: [0, 10, 0],
								}}
								transition={{
									duration: 1.3,
									easings: Elastic.easeIn,
									repeat: Infinity,
									repeatType: "loop",
									damping: 5,
									mass: 0.5,
									type: spring,
									bounce: 0.25,
									restDelta: 0.001,
								}}
							/>
						</motion.svg>
					</a>
				</div>

				{/* <div className='menu'>
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
				</div> */}
			</nav>
			{/* <Sidebar showSidebar={showSidebar} toggleSidebar={setSidebar} /> */}
		</div>
	);
};

export default Navbar;
