import ProductOverview from "~/components/ProductOverview";
import "~/styles/globals.css";

const Product = ({ params }: any) => {
  return (
    <p>
      <ProductOverview />
    </p>
  );
};

export default Product;
