import Head from 'next/head';
import Image from 'next/image';
import Header from "./components/Header"
import Link from 'next/link';

export default function Home() {
  return (
    <> 
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Head>
        <title>Resume</title>
      </Head>
      {/* Hero Section */}
      <Header/>
      <div className="pt-12">
        <div className="container px- mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">Hi, my name is</p>
            <h1 className="my-4 text-5xl font-bold leading-tight">Rajib Ali Shah</h1>
            <p className="leading-normal text-2xl mb-8">I'm a Web 3 Developer based in Pakistan.</p>
            <div className='flex-1'>
            <img src="/images/1.jpg" alt="My Image" className="h-60 w-42 object-cover rounded-full" />
            <p className="leading-normal text-1xl text-justify">I am full stack Passionate & Skilled Web 3.0 and Blockchan Developer, focused on output under demanding condition
Offering my services of Frontend & Backend Development of emerging technologies, having command on Web-Development, 
Typescript, NextJs, React Js Tailwind CSS, Chakra UI, Solidity, 
Smart Contract, Dapps and Crypto-Currencies 	</p>
            </div>
            <div className="flex-auto w-100 mt-5 ...">
            </div>
          <div className="w-full md:w-3/5 py-6 text-center">
    </div>
          </div>
        </div>
      </div>
      <section>  
   
   {/* Education Section */}
   <div className="container px-3 mx-auto mt-1">
     <h2 className="text-3xl font-bold leading-tight mb-8">Education</h2>
     <div className="flex flex-wrap -mx-2">
       <div className="w-full md:w-1/2 px-2 mb-4">
         <div className="bg-white rounded-lg overflow-hidden shadow-md">
           <div className="p-4">
             <h3 className="text-xl font-bold mb-2">Master in Business Management (MBA-Finance)</h3>
             <p className="text-gray-600">3.91 CGPA</p>
             <h3 className="text-xl font-bold mb-2">Bachelor in Commerce (B.com)</h3>
             <p className="text-gray-600">2nd Division</p>
           </div>
         </div>
       </div>
       <div className="w-full md:w-1/2 px-2 mb-4">
         <div className="bg-white rounded-lg overflow-hidden shadow-md">
           <div className="p-4">
             <h3 className="text-xl font-bold mb-2">from University of Sindh</h3>
             <p className="text-gray-600">2014-2016</p>
             <h3 className="text-xl font-bold mb-2">from University of Sindh</h3>
             <p className="text-gray-600">2012-2013</p>
            

           </div>
         </div>
       </div>
     </div>
  
 </div>
 </section> 
 <section>
       {/* Skills Section */}
       <div className="container px-3 mx-auto mt-1">
         <h2 className="text-3xl font-bold leading-tight mb-8">Skills</h2>
         <div className="flex flex-wrap -mx-2">
           <div className="w-full md:w-1/2 px-2 mb-4">
             <div className="bg-white rounded-lg overflow-hidden shadow-md">
               <div className="p-4">
                 <h4 className="text-xl font-bold mb-2">Blockchian Development -- Web 3.0 Development</h4>
                 <h4 className="text-xl mb-2">NFT - Dapps - Tokens - Decentralized Wallets</h4>
                 <h4 className="text-xl mb-2">Reactjs - Nextjs -TailwindCSS - Chakra Ui </h4>
                 <h4 className="text-xl mb-2">VS Code - Git- GitHub - Vercel </h4>
              
               </div>
             </div>
           </div>
           <div className="w-full md:w-1/2 px-2 mb-4">
             <div className="bg-white rounded-lg overflow-hidden shadow-md">
               <div className="p-4">
                 <h3 className="text-xl font-bold mb-2">From PIAIC Pakistan</h3>
                 <h4 className="text-xl mb-2">(Presidential Initiative on 
                 Artificial Intelligence & Cloud Computing)</h4>
                 <p className="text-gray-600">In Year</p>
                 <p className="text-gray-600">2022-2023</p>

               </div>
             </div>
           </div>
         </div>
       </div>
   </section>
    
    </div>
    </>
  );
}

