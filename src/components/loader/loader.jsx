import { useCallback, useEffect, useState } from "react";
import "./loader.css";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { gsap, CSSPlugin, Expo, Power3, Circ, Bounce } from "gsap";
gsap.registerPlugin(CSSPlugin);

const Loader = ({ isLoading, children }) => {
	const [counter, setCounter] = useState(0);

	const updateCountHandler = useCallback(() => {
		const count = setInterval(() => {
			setCounter((counter) =>
				counter < 100 ? counter + 15 : (clearInterval(count), setCounter(100))
			);
		}, 1000);
		() => clearInterval(count);
	}, []);

	const loadingVariants = {
		initial: {
			height: "100vh",
			position: "absolute",
			right: 0,
			top: "0%",
		},
		final: {
			height: 0,
			zIndex: 0,
			transition: {
				duration: 1.5,
				delay: 0.5,
				ease: Power3.easeOut,
			},
		},
	};

	const counterVariants = {
		initial: {
			position: "absolute",
			right: 0,
			bottom: 0,
			// opacity: 0,
		},
		final: {
			right: 0,
			bottom: ["0%", "25%", "50%", "75%", "100%"],
			opacity:
				counter === 0 ||
				counter === 30 ||
				counter === 60 ||
				counter === 90 ||
				counter === 100
					? 1
					: 0,
			transition: {
				duration: 4,
				delay: 1,
				ease: Power3.easeOut,
			},
		},
	};
	useEffect(() => {
		updateCountHandler();
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
		</AnimatePresence>
	);
};

export default Loader;
