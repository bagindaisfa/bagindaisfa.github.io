export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-gray-200 dark:border-gray-800 mt-10 text-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
      <div className="space-y-1">
        <p>© {new Date().getFullYear()} M. Baginda Isfa Pulungan</p>
        <p>
          Email:{" "}
          <a
            href="mailto:bagindaisfa05@gmail.com"
            className="underline underline-offset-2 hover:text-accent"
          >
            bagindaisfa05@gmail.com
          </a>{" "}
          · LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/m-baginda-isfa-pulungan"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-accent"
          >
            m-baginda-isfa-pulungan
          </a>
        </p>
      </div>
    </footer>
  );
}
