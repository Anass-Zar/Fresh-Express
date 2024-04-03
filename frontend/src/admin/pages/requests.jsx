import Sidebar from "../components/sidebar"
import { Link } from "react-router-dom"

const Requests = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-52 w-full py-6 px-6">
        <h1 className='text-lg font-bold mb-8'>Requests :</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-gray-500">
            <thead className="text-md text-gray-700 bg-gray-200">
                <tr>
                    <th className="px-6 py-3 w-[10%]">
                        Validate
                    </th>
                    <th className="px-6 py-3 w-[20%]">
                        Email
                    </th>
                    <th className="px-6 py-3 w-[15%]">
                        Date
                    </th>
                    <th className="px-6 py-3 w-[55%]">
                        Request
                    </th>
                </tr>
            </thead>
            <tbody className='text-sm'>
                <tr className="bg-gray-50 border-b hover:bg-gray-100 cursor-pointer hover:border hover:border-gray-300">
                    <td className="px-6 py-4 border-b border-blue-gray-50">
                      <div className="w-max">
                        <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md">
                          <span className="">Accepted</span>
                        </div>
                      </div>
                    </td>
                    <th className="px-6 py-4 font-medium text-gray-900">
                        main@gmail.com
                    </th>
                    <td className="px-6 py-4">
                        12 May 2024
                    </td>
                    <td className="px-6 py-4">
                      <Link to="/admin/request">
                        <p className='line-clamp-2'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                          Quasi nesciunt delectus earum ipsa deserunt voluptatum totam 
                          ex.Atque ullam velit assumenda itaque. Fugiat nobis sequi 
                          Quasi nesciunt delectus earum ipsa deserunt voluptatum totam 
                          ex.Atque ullam velit assumenda itaque. Fugiat nobis sequi 
                          Quasi nesciunt delectus earum ipsa deserunt voluptatum totam 
                          ex.Atque ullam velit assumenda itaque. Fugiat nobis sequi 
                          tenetur? Nobis sint dicta odit?
                        </p>
                      </Link>
                    </td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-gray-100 cursor-pointer hover:border hover:border-gray-300">
                    <td className="px-6 py-4 border-b border-blue-gray-50">
                      <div className="w-max">
                        <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-orange-500/20 text-orange-900 py-1 px-2 text-xs rounded-md">
                          <span className="">In progress</span>
                        </div>
                      </div>
                    </td>
                    <th className="px-6 py-4 font-medium text-gray-900">
                        main@gmail.com
                    </th>
                    <td className="px-6 py-4">
                        12 May 2024
                    </td>
                    <td className="px-6 py-4">
                      <Link to="/admin/request">
                        <p className='line-clamp-2'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                          Quasi nesciunt delectus earum ipsa deserunt voluptatum totam 
                          ex.Atque ullam velit assumenda itaque. Fugiat nobis sequi 
                          Quasi nesciunt delectus earum ipsa deserunt voluptatum totam 
                          ex.Atque ullam velit assumenda itaque. Fugiat nobis sequi 
                          Quasi nesciunt delectus earum ipsa deserunt voluptatum totam 
                          ex.Atque ullam velit assumenda itaque. Fugiat nobis sequi 
                          tenetur? Nobis sint dicta odit?
                        </p>
                      </Link>
                    </td>
                </tr>
                <tr className="bg-gray-50 border-b hover:bg-gray-100 cursor-pointer hover:border hover:border-gray-300">
                    <td className="px-6 py-4 border-b border-blue-gray-50">
                      <div className="w-max">
                        <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-900 py-1 px-2 text-xs rounded-md">
                          <span className="">Not accepted</span>
                        </div>
                      </div>
                    </td>
                    <th className="px-6 py-4 font-medium text-gray-900">
                        main@gmail.com
                    </th>
                    <td className="px-6 py-4">
                        12 May 2024
                    </td>
                    <td className="px-6 py-4">
                      <Link to="/admin/request">
                        <p className='line-clamp-2'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                          Quasi nesciunt delectus earum ipsa deserunt voluptatum totam 
                          ex.Atque ullam velit assumenda itaque. Fugiat nobis sequi 
                          Quasi nesciunt delectus earum ipsa deserunt voluptatum totam 
                          ex.Atque ullam velit assumenda itaque. Fugiat nobis sequi 
                          Quasi nesciunt delectus earum ipsa deserunt voluptatum totam 
                          ex.Atque ullam velit assumenda itaque. Fugiat nobis sequi 
                          tenetur? Nobis sint dicta odit?
                        </p>
                      </Link>
                    </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Requests