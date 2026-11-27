import "@testing-library/jest-dom/vitest";

// Mock scrollIntoView for jsdom
if (!HTMLElement.prototype.scrollIntoView) {
  HTMLElement.prototype.scrollIntoView = () => {};
}

// Mock window.scrollTo for jsdom
if (!window.scrollTo) {
  window.scrollTo = () => {};
}

// Mock ResizeObserver for Radix UI primitives
if (typeof window.ResizeObserver === "undefined") {
  window.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}
