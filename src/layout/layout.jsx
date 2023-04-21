import Footer from "src/components/footer/footer";
import Navbar from "src/components/navbar/navbar";

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
