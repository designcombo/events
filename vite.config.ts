import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "events",
      // formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`
    }
  },
  resolve: { alias: { src: resolve("src/") } },
  plugins: [dts()]
});
