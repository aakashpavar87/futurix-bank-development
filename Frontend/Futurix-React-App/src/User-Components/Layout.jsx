import { Outlet } from "react-router-dom";
import { Business, Footer, Navbar } from "../components";
import styles from "../style";

function Layout() {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar isUser />
        </div>
      </div>
      <Outlet />
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
