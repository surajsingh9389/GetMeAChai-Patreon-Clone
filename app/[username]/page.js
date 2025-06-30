"use client"
import React, { useEffect, useState } from "react";
import { fetchuser} from "@/actions/useractions";
import { useSession, signIn, signOut } from "next-auth/react";


const Username = ({ params }) => {
  const [currentuser, setcurrentuser] = useState({})
  const { data: session, update } = useSession();

  useEffect(() => {
     getData()
  }, [])

  const getData = async() =>{
      let u = await fetchuser(session.user?.name)
      setcurrentuser(u)
  }

  return (
    <div>
      <div className="w-full mx-auto relative">
        <img
          src="/Bg.jpg"
          className="w-full h-110"
          alt=""
        />
        <div className="absolute -bottom-16 right-[45.5%]">
          <img
           src="/pic.jpg"
            alt=""
            className="h-33 w-33 object-cover  rounded-2xl"
          />
        </div>
      </div>

      <div className="Details container mx-auto min-w-100 flex flex-col items-center mt-18 gap-2">
        <h2 className="text-3xl font-semibold">@{currentuser.name}</h2>

        <div className="flex flex-col items-center gap-2">
          <h3 className="text-center text-slate-100">
            Created Animated game art for GTA.
          </h3>
          <ul className="flex justify-between items-center min-w-70 text-slate-300">
            <li>1,423 members</li>
            <li>13 Posts</li>
            <li>$2,234</li>
          </ul>

          <button
            type="button"
            className="text-white bg-gradient-to-br ml-4 mt-1 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-40"
          >
            Join for free
          </button>
        </div>
      </div>

      <div className="container mx-auto flex gap-2">
        <div className="container gap-10 w-2/3 min-h-130 bg-gray-600 rounded-lg flex flex-col px-2 pb-5">
        <h1 className="text-center font-bold text-3xl bg-blue-950 text-white py-2 pb-3 w-full border-x border-b border-gray-400">Memberhip</h1>
         <div className="flex gap-2">
        <div className="container w-1/3 h-70 text-black bg-white rounded-xl py-1 px-2">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-center bg-blue-950 text-white py-1 rounded-xl">
                Silver!
              </h2>
              <div className="text-3xl font-bold">
                $1.50 <span className="text-sm text-gray-700">/ release</span>
              </div>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
              >
                Upgrade
              </button>

              <h3 className="text-center font-semibold">
                Limited spaces – SOLD OUT
              </h3>

              <ul className="flex flex-col list-disc list-inside">
              <li>All of our assets.</li>
              <li>
                access to the Discord channel.
              </li>
              <li>your name in our Hall of Fame.</li>
            </ul>
            </div>
          </div>

          <div className="container w-1/3 h-80 text-black bg-white rounded-xl py-1 px-2">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-center bg-blue-950 text-white py-1 rounded-xl">
                Gold!
              </h2>
              <div className="text-3xl font-bold">
                $2.50 <span className="text-sm text-gray-700">/ release</span>
              </div>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
              >
                Upgrade
              </button>

              <h3 className="text-center font-semibold">
                Limited spaces – SOLD OUT
              </h3>

              <ul className="flex flex-col list-disc list-inside">
              <li>All of our assets.</li>
              <li>
                access to the Discord channel.
              </li>
              <li>your name in our Hall of Fame.</li>
              <li>Rewards from the previous tier.</li>
              <li>Special role in Discord Server!</li>
            </ul>
            </div>
          </div>

          <div className="container w-1/3 h-120 text-black bg-white rounded-xl py-1 px-2">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-center bg-blue-950 text-white py-1 rounded-xl">
                Platinum!
              </h2>
              <div className="text-3xl font-bold">
                $3.50 <span className="text-sm text-gray-700">/ release</span>
              </div>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
              >
                Upgrade
              </button>

              <h3 className="text-center font-semibold">
                Limited spaces – SOLD OUT
              </h3>

              <ul className="flex flex-col list-disc list-inside">
              <li>All of our assets.</li>
              <li>
                access to the Discord channel.
              </li>
              <li>your name in our Hall of Fame.</li>
              <li>Rewards from the previous tier.</li>
              <li>Special role in Discord Server!</li>
               <p> Wow, thank you so much ! This tier exists so you can contribute to our financial success and we are very grateful for your support ! In addition to all the other tier rewards and our undying gratitude, you</p>
            </ul>
            </div>
          </div>
          </div>
        </div>
        <div className="Donate container w-1/3 max-h-72 bg-gray-600 rounded-lg px-2">
             <h2 className="text-2xl font-bold text-center bg-blue-950 text-white py-1 pb-2 border-x border-b border-gray-400">Donate here!</h2>

             <div className="flex flex-col gap-2 mt-4">
              <input type="text" placeholder="Enter Name" name="name" className="w-full p-3 bg-slate-800 rounded-lg outline-0.5 outline-gray-500" />

              <input type="text" placeholder="Enter Message" name="message" className="w-full p-3 bg-slate-800 rounded-lg outline-0.5 outline-gray-500" />

              <input type="text" placeholder="Enter Amount" name="amount" className="w-full p-3 bg-slate-800 rounded-lg outline-0.5 outline-gray-500" />

              <button className="bg-green-600 hover:bg-green-700 text-xl font-bold cursor-pointer py-2 text-center rounded-lg w-full">Donate</button>
             </div>
    
        </div>
      </div>

      <div className="h-10"></div>
    </div>
  );
};

export default Username;
