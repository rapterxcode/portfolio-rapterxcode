import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Portfolio App (React 19 + shadcn/ui)", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.classList.remove("dark");
    document.documentElement.removeAttribute("data-theme");
  });

  it("renders all primary sections including fixed about-section anchor ID", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: /Pasit Chatcharoenkit/i })
    ).toBeInTheDocument();
    expect(document.getElementById("bento-highlights-section")).toBeInTheDocument();
    expect(document.getElementById("about-section")).toBeInTheDocument();
    expect(document.getElementById("experience-section")).toBeInTheDocument();
    expect(document.getElementById("projects-section")).toBeInTheDocument();
    expect(document.getElementById("skills-section")).toBeInTheDocument();
    expect(document.getElementById("certification-section")).toBeInTheDocument();
    expect(document.getElementById("contact-section")).toBeInTheDocument();
    expect(screen.getByText(/Deployed on Firebase Hosting/i)).toBeInTheDocument();
  });

  it("toggles between light and dark theme with localStorage persistence", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(window.localStorage.getItem("portfolio-theme")).toBe("light");

    const toggleBtn = screen.getByRole("button", { name: /Switch to dark mode/i });
    await user.click(toggleBtn);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(window.localStorage.getItem("portfolio-theme")).toBe("dark");
    expect(screen.getByRole("button", { name: /Switch to light mode/i })).toBeInTheDocument();
  });

  it("filters projects via search input and opens/closes accessible Architecture Dialog", async () => {
    const user = userEvent.setup();
    render(<App />);

    const projectsSection = document.getElementById("projects-section")!;
    const searchInput = within(projectsSection).getByRole("searchbox", {
      name: /Search projects or tags/i,
    });

    await user.type(searchInput, "pgvector");
    const viewButtons = within(projectsSection).getAllByRole("button", {
      name: /View Architecture/i,
    });
    expect(viewButtons.length).toBeGreaterThan(0);

    await user.click(viewButtons[0]);
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByText(/Technology Stack:/i)).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("switches Hero console to Terminal tab and executes interactive commands", async () => {
    const user = userEvent.setup();
    render(<App />);

    const terminalTab = screen.getByRole("tab", { name: /Terminal/i });
    await user.click(terminalTab);

    const terminalInput = await screen.findByRole("textbox", {
      name: /Terminal command input/i,
    });
    await user.type(terminalInput, "help{Enter}");

    expect(screen.getByText(/Available commands:/i)).toBeInTheDocument();

    await user.type(terminalInput, "clear{Enter}");
    expect(screen.queryByText(/Available commands:/i)).not.toBeInTheDocument();
  });

  it("switches Certification tabs and opens Certificate Lightbox Dialog", async () => {
    const user = userEvent.setup();
    render(<App />);

    const certSection = document.getElementById("certification-section")!;
    const viewCertButtons = within(certSection).getAllByRole("button", {
      name: /View Certificate/i,
    });
    expect(viewCertButtons.length).toBeGreaterThan(0);

    await user.click(viewCertButtons[0]);
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toBeInTheDocument();
    await user.keyboard("{Escape}");

    const coursesTab = within(certSection).getByRole("tab", { name: /Course Trainings/i });
    await user.click(coursesTab);
    expect(coursesTab).toHaveAttribute("data-state", "active");
  });
});
