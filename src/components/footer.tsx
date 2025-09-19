export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border dark:border-border bg-background/50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-4 lg:px-8">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-block rounded-md bg-primary px-3 py-1 text-sm font-semibold text-white">
              MyApp
            </span>
            {/* Year */}
            <div className="text-sm text-muted-foreground">© {year}</div>
          </div>
          {/* Quote */}
          <span className="pl-6 italic text-foreground/80">
            &quot;Seamless messaging for everyone. Share moments, build
            communities, and stay in touch with ease.&quot;
          </span>
        </div>
      </div>
    </footer>
  );
}
