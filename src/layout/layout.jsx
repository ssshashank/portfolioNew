import { motion } from "framer-motion";
import Navbar from "@components/navbar/navbar";

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />

			{children}
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
