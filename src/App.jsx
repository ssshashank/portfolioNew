import "./App.css";
import Layout from "./layout/layout";

import WithLoader from "@components/loader/loader";

function App() {
	return (
		<div className='App'>
			<WithLoader>
				<Layout></Layout>
			</WithLoader>
		</div>
	);
}

export default App;
