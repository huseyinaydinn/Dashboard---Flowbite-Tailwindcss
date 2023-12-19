import { useContext } from "react";
import { Context } from "../context/MenuContext";
import { useMediaQuery } from "react-responsive";
import Chart from "./Chart";
import LatestCustomers from "./LatestCustomers";
import TopProducts from "./TopProducts";
import Transactions from "./Transactions";
import Footer from "./Footer";

const Content = () => {
  const { menuOpen } = useContext(Context);

  const MobileMode = useMediaQuery({
    query: "(max-width: 640px)",
  });



  return (
    <main
      className={`mt-[80px] ${MobileMode ? "ml-0" : menuOpen ? "ml-[250px]" : "ml-[80px]"
        } transition-all duration-300 ease-linear p-4`}
    >
      <div className="flex flex-wrap items-center justify-center w-full gap-2">
        {/* Chart */}
        <Chart />

        {/* Latest Customers */}
        <LatestCustomers />
        {/* Top Products */}
        <TopProducts />

        {/* Transactions */}
        <Transactions />
      </div>
      <Footer />
    </main>
  );
};

export default Content;
