// @ts-ignore - Ignoring missing type definitions for Alpine.js CSP module
import Alpine from "@alpinejs/csp";

Alpine.data("popup", () => ({
  message: "Hello!",
  enabled: false,

  async init() {
    console.log("Popup initialized");
    const result = await chrome.storage.sync.get(["enabled"]);
    this.enabled = result.enabled || false;
  },
  async toggle() {
    this.enabled = !this.enabled;
    await chrome.storage.sync.set({ enabled: this.enabled });
  },
}));

Alpine.start();
