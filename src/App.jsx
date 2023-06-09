import "./App.css";
import Layout from "./layout/layout";
import CustomCursor from "@components/cursor/cursor";
import WithLoader from "@components/loader/loader";

function App() {
	return (
		<div className='App'>
			<WithLoader>
				<Layout></Layout>
				<CustomCursor />
			</WithLoader>
		</div>
	);
}

export default App;
