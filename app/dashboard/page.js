"use client"
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser, updateProfile } from "@/actions/useractions";

const Dashboard = () => {
  const { data: session, update } = useSession();
  const router = useRouter();
  const [form, setform] = useState({})

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }else{
      getData()
    }
  }, [router, session]);

  const handleSubmit = async (e) =>{
    let a = await updateProfile(e, session.user.name)
    alert("Profile Updated")
  }

  const handleChange = (e) =>{
      setform({...form, [e.target.name]: e.target.value})
  }

  const getData = async () =>{
    let u = await fetchuser(session.user.name)
    setform(u);
  }

  return (
    <div>
      <div className="container mx-auto w-[40vw] flex flex-col gap-2 py-6">
        <h1 className="text-3xl text-center">Welcome to your Dashboard</h1>
        <form action={handleSubmit} className="flex flex-col gap-1">

            <div className="flex flex-col gap-0.5">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                id="name"
                className="bg-slate-600 rounded-lg py-1 px-3 outline-none border-slate-100"
                value={form.name?form.name: ""}
                onChange={handleChange}
                name="name"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="bg-slate-600 rounded-lg py-1 px-3 outline-none border-slate-100"
                value={form.email?form.email: ""}
                onChange={handleChange}
                name="email"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="bg-slate-600 rounded-lg py-1 px-3 outline-none border-slate-100"
                value={form.username?form.username: ""}
                onChange={handleChange}
                name="username"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label htmlFor="profile_pic">Profile Picture Url</label>
              <input
                type="text"
                id="profile_pic"
                className="bg-slate-600 rounded-lg py-1 px-3 outline-none border-slate-100"
                value={form.profilepic?form.profilepic: ""}
                onChange={handleChange}
                name="profilepic"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label htmlFor="bg-pic">Cover Picture Url</label>
              <input
                type="text"
                id="bg-pic"
                className="bg-slate-600 rounded-lg py-1 px-3 outline-none border-slate-100"
                value={form.coverpic?form.coverpic: ""}
                onChange={handleChange}
                name="coverpic"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label htmlFor="razorpay_id">Razorpay id</label>
              <input
                type="text"
                id="razorpay_id"
                className="bg-slate-600 rounded-lg py-1 px-3 outline-none border-slate-100"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label htmlFor="secret">Razorpay Secret</label>
              <input
                type="text"
                id="secret"
                className="bg-slate-600 rounded-lg py-1 px-3 outline-none border-slate-100"
              />
            </div>

          <button type="submit" className="text-white w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2 mt-5">save</button>

        </form>
      </div>
    </div>
  );
};

export default Dashboard;
