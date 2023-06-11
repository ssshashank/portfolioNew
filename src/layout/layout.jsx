import { motion } from "framer-motion";
import Navbar from "@components/navbar/navbar";
import CustomCursor from "@components/cursor/cursor";
const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			<CustomCursor />
			{children}
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
