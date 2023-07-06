import { useEffect, useState } from "react";
import { getAll } from "../api/product";
import Product from "../components/product";
import { IProduct } from "../../models";
import Slider from "../components/layout/slider";

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProduct = async () => {
    try {
      const response = await getAll();
      if (Array.isArray(response.data.product)) {
        setProducts(response.data.product);
      } else {
        console.error("Dữ liệu không phải là một mảng hợp lệ:", response.data);
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi khi lấy dữ liệu:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="px-[30px]">
      <Slider />
      <h1 className="pb-5 text-[#444444] text-[22px]">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <Product data={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
