import { useRef } from "react";
import { useFollowPointer } from "@hooks/useFollowPointer";
import { motion, spring } from "framer-motion";
import "./cursor.css";

const CustomCursor = () => {
	const cursorRef = useRef(null);
	const { x, y } = useFollowPointer(cursorRef);

	return (
		<motion.div
			key='cursorAnimate'
			ref={cursorRef}
			initial={{
				opacity: 0,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
			className='box'
			animate={{
				x,
				y,
				opacity: 1,
				rotate: "90deg",
				transition: {
					duration: 0.5,
					damping: 5,
					mass: 0.5,
					type: spring,
					bounce: 0.25,
					restDelta: 0.001,
				},
			}}></motion.div>
	);
};

export default CustomCursor;
