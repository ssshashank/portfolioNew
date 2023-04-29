import { useRef } from "react";
import "./App.css";
import Layout from "./layout/layout";
import { useFollowPointer } from "@hooks/useFollowPointer";
import { motion, spring } from "framer-motion";

function App() {
	const cursorRef = useRef(null);
	const { x, y } = useFollowPointer(cursorRef);
	return (
		<div className='App'>
			<Layout></Layout>
			<motion.div
				key='cursorAnimate'
				ref={cursorRef}
				initial={{ opacity: 0 }}
				className='box'
				animate={{
					x,
					y,
					opacity: 1,
					transition: {
						// ease: "easeInOut",
						damping: 3,
						type: spring,
						stiffness: 80,
						restDelta: 0.001,
					},
				}}
			/>
		</div>
	);
}

export default App;
