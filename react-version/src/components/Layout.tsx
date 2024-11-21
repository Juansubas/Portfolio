import Header from "./Header/Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col items-center justify-between w-full max-w-screen-xl mx-auto pt-20 md:pt-[80px]">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
