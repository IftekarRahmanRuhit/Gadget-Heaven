
import { NavLink } from "react-router-dom"

const Categories = ({ categories }) => {
  return (
    <div className="p-7  bg-white/25 shadow-lg rounded-md">
      <div className="flex flex-col space-y-3">
      <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-3 rounded-full text-center font-medium ${
              isActive
                ? 'bg-[#9538E2] text-white'
                : 'bg-gray-100 text-gray-700'
            }`
          }
        >
          All Products
        </NavLink>


        {categories.map((category) => (
          <NavLink 
            key={category.category}
            to={`/category/${category.category}`}
            className={({ isActive }) =>
              `px-4 py-3 rounded-full text-center font-medium ${
                isActive 
                  ? 'bg-[#9538E2] text-white'
                  : 'bg-gray-100 text-gray-700'
              }`
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Categories