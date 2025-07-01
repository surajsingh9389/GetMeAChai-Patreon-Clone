"use client";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <div className="text-white flex flex-col justify-center items-center min-h-[40vh]">
        <h1 className="text-4xl font-bold flex justify-center items-center gap-1">
          Buy Me A Chai ==
          <span className="pb-2">
            <img src="./Tea.gif" width={60} alt="" />
          </span>
        </h1>
        <div className="text-center text-xl">
          <p>Support your favorite creators — One chai at a time.</p>
          <p>
            A Crowdfunding platform for creaters. Get funded by your fans and
            followers. Start Now!
          </p>
        </div>
        <div className="btn flex gap-4 mt-3">
          {session && (
            <Link href={"/dashboard"}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Get started
                </span>
              </button>
            </Link>
          )}

          {!session && (
            <Link href={"/login"}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Start here
                </span>
              </button>
            </Link>
          )}

          <Link href={"/about"}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Read more
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-15"></div>

      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-14">
          {" "}
          Your Fans can buy your a Chai!
        </h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              src="./bank.gif"
              alt=""
              className="bg-slate-400 rounded-full p-1 text-black"
              width={88}
            />
            <p className="font-bold text-center">Fund yourself</p>
            <p className="text-center">Your Fans are available for help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              src="./coin.gif"
              alt=""
              className="bg-slate-400 rounded-full p-1 text-black"
              width={88}
            />
            <p className="font-bold text-center">Fund yourself</p>
            <p className="text-center">
              you can make money selling your art, ideas and skills.
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              src="./groups.gif"
              alt=""
              className="bg-slate-400 rounded-full p-1 text-black"
              width={88}
            />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center">you can make your own community.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-15"></div>

      <div className="text-white container py-8 mx-auto">
        <h2 className="text-2xl text-center font-bold mb-8">
          Learn More About Us
        </h2>
        <div className="px-1 md:px-5 mt-5">
          <p className="p-4 text-gray-200 text-md text-center font-sans">
            At Get Me A Chai, we are dedicated to supporting developers,
            creators, and influencers by connecting them with their supporters.
            Our platform enables individuals to fund their projects and ideas,
            providing a space where creativity and innovation can thrive.
          </p>
          <p className="p-4 text-gray-200 text-md text-center font-sans">
            Our mission is to empower talented individuals by facilitating
            financial support, allowing them to focus on what they do best –
            creating. Whether you're a developer coding the next big app, a
            content creator making engaging videos, or an influencer sharing
            your passion, Get Me A Chai is here to help you achieve your goals.
          </p>
          <p className="p-4 text-gray-200 text-md text-center font-sans">
            We believe in the power of community and the impact of collective
            support. By providing a platform for patrons to contribute, we aim
            to transform dreams into reality and foster a culture of creativity
            and innovation.
          </p>
        </div>
      </div>
    </div>
  );
}
