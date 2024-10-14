import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            _components: "/src/common/components",
        },
    },
    plugins: [react()],
});
