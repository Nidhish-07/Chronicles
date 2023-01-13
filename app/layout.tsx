import Header from "./Header";
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-gray-100 transition-all duration-700 dark:bg-zinc-900 ">
        <Header></Header>
        <div className="max-w-6xl  mx-auto">{children}</div>
      </body>
    </html>
  );
}
