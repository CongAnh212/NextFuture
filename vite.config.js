import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: [
        "/images/comet/empty_states_icons/files/null_states_files_dark_mode.svg",
      ],
    },
  },
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
});
