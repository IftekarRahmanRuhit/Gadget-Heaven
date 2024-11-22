
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const data = useLoaderData();


  const slicedData = data.slice(0, 10);

  return (
    <div className="w-11/12 mx-auto max-w-screen-2xl">
      <h2 className="mt-5 font-bold text-2xl">Statistics</h2>

      <div className="mt-5">
        <div className="bg-purple-100 rounded-xl p-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={slicedData} barCategoryGap="20%">
              <XAxis dataKey="product_title" stroke="gray-200" tick={{ fontSize: 10 }} />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="price" fill="#9538E2" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;