import { ReactNode, useEffect, useState } from "react";
import Navbar from "./navbar";

interface LayoutProp {
  children: ReactNode;
}

const Layout: React.FC<LayoutProp> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-[9999]">
        <Navbar scrolls={visible} />
      </header>
      <main className=" mt-40">{children}</main>
    </>
  );
};

export default Layout;
