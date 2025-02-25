import React from 'react'
import Image from 'next/image'

const Ourtext = () => {
    return (
        <main className="relative min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Background"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
          </div>
    
          {/* Content */}
          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to Our Beautiful World
            </h1>
            <p className="max-w-2xl text-lg text-gray-200 sm:text-xl md:text-2xl">
              Discover the magic of nature and the endless possibilities that await you.
            </p>
          </div>
        </main>
      )
}

export default Ourtext
