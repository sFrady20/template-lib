import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    dedupe: ["react"],
  },
  build: {
    outDir: "./dist/native",
    lib: {
      entry: [resolve(__dirname, "src/index.ts")],
      name: "native",
    },
  },
  plugins: [react(), dts()],
});
