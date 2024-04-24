import { Link } from "react-router-dom"

const Error404 = () => {
  return (
    <section className="flex items-center h-screen bg-gray-50 text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto mb-16">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-green-300">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn&apos;t find this page.</p>
          <p className="mt-4 mb-8 dark:text-gray-600">But don&apos;t worry, you can find plenty of other things on our homepage.</p>
          <Link to={'/'} className="px-6 py-2.5 font-semibold rounded-lg bg-green-600 text-gray-50">Back to homepage</Link>
        </div>
      </div>
    </section>
  )
}

export default Error404