import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import path from "node:path";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	resolve: {
		alias: {
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@screens": path.resolve(__dirname, "./src/screens"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
		},
	},
	plugins: [react(), jsconfigPaths(), svgr()],
});
