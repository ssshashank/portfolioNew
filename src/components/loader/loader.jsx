import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Linear, Power3 } from "gsap";
import { BASE_UTILS } from "src/utils/baseUtils";
import "./loader.css";

const Loader = ({ children }) => {
	const [counter, setCounter] = useState(0);

	const updateCountHandler = useCallback(() => {
		setCounter((counter) =>
			counter < 100 ? BASE_UTILS.getRandomIntInclusive(counter) : 100
		);
	}, []);

	const loadingVariants = {
		initial: {
			height: "100vh",
			position: "absolute",
			right: 0,
			top: 0,
		},
		final: {
			height: counter === 100 && 0,
			transition: {
				duration: 1.5,
				delay: counter === 100 && 1,
				ease: Power3.easeOut,
				transition: {
					delayChildren: 3.5,
				},
			},
		},
	};

	const counterVariants = {
		initial: {
			position: "absolute",
			right: 0,
			opacity: 0,
			bottom: 0,
		},
		final: {
			right: 0,
			bottom: counter <= 10 ? 0 : `${counter - 10}%`,
			opacity: counter === 100 ? 0 : 1,
			transition: {
				duration: 2,
				delay: 0,
				ease: Power3.easeOut,
			},
		},
	};
	useEffect(() => {
		const interval = setInterval(updateCountHandler, 1000);
		return () => clearInterval(interval);
	}, [updateCountHandler]);
	return (
		<AnimatePresence>
			<motion.div
				key={"loader"}
				className='loadingContainer'
				variants={loadingVariants}
				initial={"initial"}
				animate={counter === 100 && "final"}>
				<motion.div
					variants={counterVariants}
					initial={"initial"}
					animate={"final"}
					className='counter'>
					{counter}
				</motion.div>
			</motion.div>
			{counter === 100 && (
				<motion.div
					initial={{
						visibility: "hidden",
					}}
					animate={{
						visibility: "visible",
						// x: [10, -10, 10],
						transition: {
							duration: 1.3,
							delay: 3,
							ease: Linear.easeInOut,
						},
					}}>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Loader;
