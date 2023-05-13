import "./App.css";
import Layout from "./layout/layout";
import CustomCursor from "@components/cursor/cursor";

function App() {
	return (
		<div className='App'>
			<Layout></Layout>
			<CustomCursor />
		</div>
	);
}

export default App;
