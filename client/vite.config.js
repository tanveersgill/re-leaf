import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react(), mkcert()],
  server: {
    proxy: {
      "/api": {
        // target: "https://releaf-f6xfye37pq-pd.a.run.app",
        target: "http://localhost:3000",
        changeOrigin: true,
        // secure: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
