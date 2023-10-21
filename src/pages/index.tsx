import Banner from "@/components/Banner";
import Products from "@/components/Prodeucts";
import { ProductProps } from "../../type";

interface IProps {
  productData: ProductProps;
}

export default function Home({ productData }: IProps) {
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt-20 lg:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products productData={productData} />
        </div>
      </div>
    </main>
  );
}

// SSR for data fetching
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } };
};
