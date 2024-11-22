import { Outlet, useLoaderData } from "react-router-dom"
import Banner from "../Components/Banner"
import Categories from "../Components/categories"

const Home = () => {

  const categories = useLoaderData()
  return (
    <div>
      <Banner></Banner>

     <div className="w-11/12 mx-auto lg:flex gap-10 mt-10 max-w-screen-2xl">
    <div>
    <Categories  categories={categories} ></Categories>

    </div>
     <div>
       <Outlet></Outlet>
     </div>
     </div>
   

    </div>
  )
}

export default Home
