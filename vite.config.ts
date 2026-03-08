import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: '/MCTI_project0/',
  server: {
    port: 5173,
  },
});

