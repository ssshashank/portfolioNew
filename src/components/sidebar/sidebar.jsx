import { Bounce, Circ, Sine } from "gsap";
import "./sidebar.css";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Power3 } from "gsap";

const itemVariants = {
	closed: {
		opacity: 0,
	},
	open: { opacity: 1 },
};

const sideVariants = {
	closed: {
		transition: {
			staggerChildren: 0.2,
			staggerDirection: -1,
		},
	},
	open: {
		transition: {
			staggerChildren: 0.2,
			staggerDirection: 1,
		},
	},
};

const aside = [
	{
		id: 1,
		label: "Aside1",
		class: "aside1",
		delay: ".7",
		delayStart: "0.3",
		// entryEase: ,
		// exitEase: "",
	},
	{ id: 2, label: "Aside2", class: "aside2", delay: ".5", delayStart: "0.5" },
	{
		id: 3,
		label: "Aside3",
		class: "aside3",
		delay: ".3",
		delayStart: "0.7",
		// entryEase: Circ.easeOut,
	},
];

const Sidebar = ({ showSidebar }) => {
	return (
		<AnimatePresence>
			{showSidebar &&
				aside?.map((item, index) => (
					<motion.aside
						key={item?.label}
						className={item?.class}
						initial={{
							width: 0,
							position: "absolute",
							right: 0,
							top: 0,
						}}
						animate={{
							width: "100vw",
							zIndex: 0,
							transition: {
								duration: 2.5,
								delay: item?.delayStart,
								ease: Bounce.easeOut,
							},
						}}
						exit={{
							width: 0,
							transition: {
								duration: 0.3,
								delay: item?.delay,
								ease: Power3.easeOut,
							},
						}}>
						{index === aside?.length - 1 && (
							<motion.div
								initial='closed'
								animate='open'
								exit='closed'
								variants={sideVariants}
								className='sidebar'>
								<div className='sidebarBody'>
									<h1>Hello</h1>
								</div>
							</motion.div>
						)}
					</motion.aside>
				))}
		</AnimatePresence>
	);
};

export default Sidebar;
