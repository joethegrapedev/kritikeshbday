"use client";
import Ourtext from "../app/Ourtext";
import Image from "next/image";




const images = [
  {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    message: "Beautiful sunset over the mountains",
  },
  {
    url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
    message: "Morning mist in the valley",
  },
  {
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    message: "Peaceful forest walk",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    message: "Serene beach moment",
  },
]




export default function Home() {

  return (
    <div className="mx-auto max-w-6xl p-4">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {images.map((item, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-lg border bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-square overflow-hidden rounded-md">
              <Image
                src={item.url || "/placeholder.svg"}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <p className="mt-3 text-center text-sm text-gray-600">{item.message}</p>
          </div>
        ))}
      </div>
      <div> 
        <Ourtext />
      </div>
    </div>
    
    
    
  )
   
      
      //  <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      //   <Image
      //     className="dark:invert"
      //     src="/next.svg"
      //     alt="Next.js logo"
      //     width={180}
      //     height={38}
      //     priority
      //   />
      //   <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
      //     <li className="mb-2">
      //       Get started by editing{" "}
      //       <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
      //         src/app/page.tsx
      //       </code>
      //       .
      //     </li>
      //     <li>Save and see your changes instantly.</li>
      //   </ol>

      //   <div className="flex gap-4 items-center flex-col sm:flex-row">
      //     <a
      //       className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       <Image
      //         className="dark:invert"
      //         src="/vercel.svg"
      //         alt="Vercel logomark"
      //         width={20}
      //         height={20}
      //       />
      //       Deploy now
      //     </a>
      //     <a
      //       className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
      //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Read our docs
      //     </a>
      //   </div>
      // </main>
      // <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      //   <a
      //     className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      //     href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     <Image
      //       aria-hidden
      //       src="/file.svg"
      //       alt="File icon"
      //       width={16}
      //       height={16}
      //     />
      //     Learn
      //   </a>
      //   <a
      //     className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      //     href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     <Image
      //       aria-hidden
      //       src="/window.svg"
      //       alt="Window icon"
      //       width={16}
      //       height={16}
      //     />
      //     Examples
      //   </a>
      //   <a
      //     className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      //     href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     <Image
      //       aria-hidden
      //       src="/globe.svg"
      //       alt="Globe icon"
      //       width={16}
      //       height={16}
      //     />
      //     Go to nextjs.org →
      //   </a>
      // </footer> 
        
  
}
