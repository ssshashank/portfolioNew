import { useEffect, useRef, useState } from "react";
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
						// duration: 1,
						damping: 5,
						mass: 0.5,
						type: spring,
						bounce: 0.25,
						restDelta: 0.001,
					},
				}}></motion.div>
		</div>
	);
}

export default App;
