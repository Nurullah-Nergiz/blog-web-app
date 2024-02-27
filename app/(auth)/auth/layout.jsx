export default function RootLayout({ children }) {
   return (
      <section className="auth max-w-sm w-full m-auto p-4 flex flex-col shadow shadow-tertiary rounded-2xl">
         <header className="h-40">header</header>
         <main className="flex flex-col gap-4">{children}</main>
      </section>
   );
}
