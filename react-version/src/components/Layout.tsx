import Header from "./Header/Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen px-5">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
