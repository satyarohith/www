/** @jsx h */
import { h, jsx, serve } from "https://deno.land/x/sift@0.4.3/mod.ts";
import Home from "./routes/index.tsx";

serve({
  "/": () => jsx(<Home />),
});
