import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar"
import { Link } from "react-router-dom"

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('/api/requests/requests');
        const data = await response.json();
        setRequests(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRequests();
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-52 w-full py-6 px-6">
        <div className='flex justify-between mb-8'>
          <h1 className='text-lg font-bold'>Requests :</h1>
          <input type="text" onChange={(e) => setSearch(e.target.value)} className="h-8 w-72 px-3 text-sm placeholder:text-gray-400 text-gray-700 bg-white border-2 border-gray-400 rounded-lg focus:outline-none focus:border-green-500 focus:bg-white" placeholder="Search..." />
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-gray-500">
            <thead className="text-md text-gray-700 bg-gray-200">
              <tr>
                <th className="px-6 py-3 w-[10%]">
                  Status
                </th>
                <th className="px-6 py-3 w-[20%]">
                  Email
                </th>
                <th className="px-6 py-3 w-[15%]">
                  Date
                </th>
                <th className="px-6 py-3 w-[55%]">
                  Message
                </th>
              </tr>
            </thead>
            <tbody className='text-sm'>
              {requests
                .filter((request) => request.email.toLowerCase().includes(search.toLowerCase()))
                .reverse()
                .map((request, index) => (
                  <>
                    <tr key={index} className="bg-gray-50 border-b hover:bg-gray-100 cursor-pointer hover:border hover:border-gray-300">
                    <Link to={`/admin/request/${request._id}`}>
                      <td className="px-6 py-4 border-b border-blue-gray-50">
                          <div className="w-max">
                            <div className={`relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none py-1 px-2 text-xs rounded-md ${request.status === 'waiting' ? 'bg-orange-500/20 text-orange-900' : request.status === 'accepted' ? 'bg-green-500/20 text-green-900' : request.status === 'refused' ? 'bg-red-500/20 text-red-900' : ''}`}>
                              <span>{request.status}</span>
                            </div>
                          </div>
                      </td>
                      </Link>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {request.email}
                      </td>
                      <td className="px-6 py-4">
                        {new Date(request.createdAt).toLocaleDateString("en-GB")}
                      </td>
                      <Link to={`/admin/request/${request._id}`}>
                        <td className="px-6 py-4">
                          <p className='line-clamp-2'>{request.message}</p>
                        </td>
                      </Link>
                    </tr></>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Requests