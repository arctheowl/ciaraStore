import SideBar from "~/components/SidebarFilters";
import "~/styles/globals.css";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

export default function Example() {
  return (
    <div className="">
      <SideBar>
        <div className=" w-1/2 text-center">
          <h1 className=" pb-10 text-xl font-semibold">Shop All</h1>
          <p>
            It all started when I decided to make a busy board for my friend's
          </p>
        </div>
      </SideBar>
    </div>
  );
}
