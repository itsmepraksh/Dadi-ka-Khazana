import { useNavigate } from "react-router-dom";
import ProductItem from "../components/ProductItem";

const Product = () => {
  const navHandler = (e) => {
    navigate(`/product/detail/${e}`);
  };

  const navigate = useNavigate();

  return (
    <div className="py-20 px-5">
      <h1 className="text-center text-xl font-['GilroyRegular']">Products</h1>
      <div id="product-nav" className="flex overflow-x-scroll gap-x-3 py-3">
        <p className="px-4 py-1 bg-red-400 rounded-4xl">All</p>
        <p className="px-4 py-1 bg-zinc-700 rounded-4xl">Ingredients</p>
        <p className="px-4 py-1 bg-zinc-700 rounded-4xl">Cookware</p>
        <p className="px-4 py-1 bg-zinc-700 rounded-4xl">Accessories</p>
      </div>

      <div id="product-item-box" className=" py-5 flex flex-col gap-4">
      
        <ProductItem
          productName={"Organic Olive Oil"}
          productPrice={"₹199"}
          isSponsored={true}
          productSrc={
            "https://images.unsplash.com/photo-1642189941430-7073f85d7140?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <ProductItem
          productName={"Stainless Steel Pan"}
          productPrice={"₹999"}
          // isSponsored={true}
          productSrc={
            "https://images.unsplash.com/photo-1698939586636-98209ecf8516?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <ProductItem
          productName={"Artisan Sea Salt"}
          productPrice={"₹299"}
          // isSponsored={true}
          productSrc={
            "https://images.unsplash.com/photo-1737103602872-7b9ebd830ac4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <ProductItem
          productName={"Wooden Cutting Board"}
          productPrice={"₹499"}
          // isSponsored={true}
          productSrc={
            "https://images.unsplash.com/photo-1638726302333-96ed1da83773?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
    </div>
  );
};

export default Product;
