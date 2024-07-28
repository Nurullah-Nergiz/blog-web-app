export default function RootLayout({ children }) {
   return (
      <section className="auth h-screen w-full flex items-center justify-center">
         <div className="max-w-sm p-4 flex flex-col shadow shadow-tertiary rounded-2xl">
            <header className="h-40">header</header>
            <main className="flex flex-col gap-4">{children}</main>
         </div>
      </section>
   );
}
