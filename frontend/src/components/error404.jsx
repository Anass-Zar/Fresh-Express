import Sad from "../images/sad.png"

const Error404 = () => {
  return (
    <div>
      <div>
        <img src={Sad} alt="Not found" className="w-44 md:w-64 h-44 md:h-64 mx-auto mb-5" />
        <p className="text-center text-lg md:text-2xl font-bold font-[Dosis] uppercase text-gray-600 w-full md:w-[400px] mx-auto">No products were found matching your selection.</p>
      </div>
    </div>
  )
}

export default Error404;
