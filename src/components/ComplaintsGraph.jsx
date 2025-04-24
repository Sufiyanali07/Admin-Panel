import { useEffect, useState } from 'react';
import { getComplaintsGraphData } from '../services/api';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const ComplaintsGraph = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const d = await getComplaintsGraphData();
      setData(d);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-80 flex flex-col">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Complaints Overview</h2>
      {loading ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-500"></div>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="complaints" fill="#f87171" name="Complaints" />
            <Bar dataKey="resolved" fill="#34d399" name="Resolved" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ComplaintsGraph;
