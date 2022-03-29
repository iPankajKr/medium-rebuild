import Link from 'next/link'

function header() {
  return (
    <header className="bg-blue flex justify-between max-w-7xl p-5 mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="/medium-logo.svg"
            alt=""
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
            Follow
          </h3>
        </div>
        <div className="flex items-center space-x-5 text-green-600">
          <h3>Sign In</h3>
          <h3 className="rounded-full border border-green-600 px-4 py-1">
            Get Started
          </h3>
        </div>
      </div>
    </header>
  )
}

export default header
