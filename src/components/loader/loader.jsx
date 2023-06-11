import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Linear, Power3 } from "gsap";
import { BASE_UTILS } from "@utils/baseUtils";
import LoaderStyleModule from "./loader.module.css";

const Loader = ({ children }) => {
	const [counter, setCounter] = useState(0);

	const [isLoading, setIsLoading] = useState(true);
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
			opacity: counter === 100 ? 0 : 1,

			transition: {
				duration: 1.5,
				delay: counter === 100 && 1,
				ease: Power3.easeOut,
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
		<>
			<motion.div
				key={"loader"}
				className={LoaderStyleModule.loadingContainer}
				variants={loadingVariants}
				initial={"initial"}
				animate={counter === 100 && "final"}>
				<motion.div className={LoaderStyleModule.nav}>
					<div className={LoaderStyleModule.combineTitle}>
						<p className={LoaderStyleModule.title}>SsHAsHANK</p>
					</div>
					<div className={LoaderStyleModule.combineTitle}>
						<p className={LoaderStyleModule.title}>Portoflio</p>
						<p className={LoaderStyleModule.titleLines}>
							&nbsp;&copy;{new Date().getFullYear()}
						</p>
					</div>
				</motion.div>
				<motion.div
					variants={counterVariants}
					initial={"initial"}
					animate={"final"}
					onEnded={() => console.log("ended")}
					className={LoaderStyleModule.counter}>
					{counter}
					<span className={LoaderStyleModule.percentage}>%</span>
				</motion.div>
			</motion.div>
			{counter === 100 && (
				<motion.div
					initial={{
						visibility: "hidden",
					}}
					animate={{
						visibility: "visible",
						transition: {
							duration: 1.3,
							delay: 3,
						},
					}}>
					{children}
				</motion.div>
			)}
		</>
	);
};

export default Loader;
