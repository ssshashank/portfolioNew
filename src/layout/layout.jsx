import Footer from "@components/footer/footer";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Navbar from "@components/navbar/navbar";
const Layout = ({ children }) => {
	return (
		<motion.div
			initial={{ visibility: "hidden" }}
			animate={{
				visibility: "visible",
				transition: {
					delay: 2,
				},
			}}>
			<Navbar />
			{children}
			{/* <Footer /> */}
		</motion.div>
	);
};

export default Layout;
