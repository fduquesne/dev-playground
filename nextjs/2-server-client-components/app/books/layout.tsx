import ThemeProvider from "./_components/theme-provider";
import ThemeToggle from "./_components/theme-toggle";

export default function LayoutBooks({ children }: LayoutProps<"/books">) {
  return (
    <ThemeProvider>
      <header>
        <ThemeToggle />
      </header>

      {children}
    </ThemeProvider>
  );
}
