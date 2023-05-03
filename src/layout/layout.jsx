import Footer from "src/components/footer/footer";
import Navbar from "src/components/navbar/navbar";
import Sidebar from "src/components/sidebar/sidebar";

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
