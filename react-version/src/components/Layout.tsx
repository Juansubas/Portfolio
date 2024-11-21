import Header from "./Header/Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen px-5">
      <div className="background absolute top-0 left-0 w-full h-full z-[-1]"></div>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
