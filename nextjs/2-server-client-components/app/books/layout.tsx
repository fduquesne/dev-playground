import ThemeProvider from "./_components/theme-provider";
import ThemeToggle from "./_components/theme-toggle";

export default function LayoutBooks({ children }: LayoutProps<"/books">) {
  return (
    <ThemeProvider>
      <div className="min-h-full bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
        <header>
          <ThemeToggle />
        </header>

        {children}
      </div>
    </ThemeProvider>
  );
}
