import { useEffect, useState } from "react"
import { getAll } from "../api/product"
import Product from "../components/product"
import { IProduct } from "../../models"
import Slider from "../components/layout/slider"

const HomePage = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const fetchProduct= async () => {
        const {data} = await getAll()
        setProducts(data)
        
    }
    useEffect(()=>{
        fetchProduct()
    },[])
    return <div className="px-[30px]">
        <Slider/>
        <h1 className="pb-5 text-[#444444] text-[22px]">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        <div className="grid grid-cols-4 gap-4">
        {products.map(product => <Product data={product} key={product.id} />)
            }
        </div>
    </div>
}

export default HomePage