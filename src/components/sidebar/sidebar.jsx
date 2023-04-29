import { useCallback, useEffect, useMemo, useRef } from "react";
import "./sidebar.css";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { color } from "framer-motion";

const links = [
	// { name: "Home", to: "#", id: 1 },
	// { name: "About", to: "#", id: 2 },
	// { name: "Blog", to: "#", id: 3 },
	// { name: "Contact", to: "#", id: 4 },
];

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
	{ id: 1, label: "Aside1", class: "aside1", delay: ".6", delayStart: "0.9" },
	{ id: 2, label: "Aside2", class: "aside2", delay: ".4", delayStart: "1.1" },
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
							transition: { duration: 0.3, delay: item?.delayStart },
						}}
						exit={{
							width: 0,
							transition: {
								duration: 0.3,
								delay: item?.delay,
							},
						}}>
						{index === aside?.length - 1 && (
							<motion.div
								initial='closed'
								animate='open'
								exit='closed'
								variants={sideVariants}>
								{links.map(({ name, to, id }) => (
									<motion.a
										key={id}
										href={to}
										whileHover={{ scale: 1.1 }}
										variants={itemVariants}>
										{name}
									</motion.a>
								))}
							</motion.div>
						)}
					</motion.aside>
				))}
		</AnimatePresence>
	);
};

export default Sidebar;
