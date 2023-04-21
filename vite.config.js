import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import path from "node:path"
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  resolve:{
    alias:{
      '@assets':path.resolve(__dirname,'./src/assets')
    }
  },
  plugins: [react(),jsconfigPaths(),svgr()],
});