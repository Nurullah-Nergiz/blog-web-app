export default function RootLayout({ children }) {
   return (
      <section className="h-screen w-full flex items-center justify-center">
         <div className="max-w-sm px-4 py-6 flex flex-col bg-white shadow shadow-tertiary rounded-2xl relative overflow-hidden">
            <header className="h-56">
               <div className="w-[30rem] h-60 bg-gradient-to-r from-red-400 to-primary -rotate-[22deg] -translate-x-12 -translate-y-24 rounded-l-[3rem] absolute -inset-4 aopacity-50"></div>
            </header>
            <main className="auth flex flex-col gap-4">{children}</main>
         </div>
      </section>
   );
}
