

function Hero() {
  return (
    <div className="bg-blue border-y border-black py-10 lg:py-0">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className='px-10 space-y-5'>
          <h1 className='text-8xl max-w-xl font-heading'>Stay curious.</h1>
          <h3 className="font-body">Discover stories, thinking, and expertise from writers on any topic.</h3>
        </div>          
        
        <img 
          className="hidden md:inline-flex h-32 lg:h-full" 
          src='/medium.png' 
          alt='' 
        />
      </div>
    </div>
  )
}

export default Hero