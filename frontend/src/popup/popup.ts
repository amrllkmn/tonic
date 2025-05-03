// @ts-ignore - Ignoring missing type definitions for Alpine.js CSP module
import Alpine from "@alpinejs/csp";

Alpine.data("popup", () => ({
  message: "Hello World!",
  enabled: false,

  init() {
    console.log("Popup initialized");
  },
  toggle() {
    this.enabled = !this.enabled;
  },
}));

Alpine.start();
