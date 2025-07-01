"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser, updateProfile } from "@/actions/useractions";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    username: "",
    profilepic: "",
    coverpic: "",
    razorpay_id: "",
    secret: "",
  });

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      getData();
    }
  }, [session]);

  const getData = async () => {
    const userData = await fetchuser(session.user.name);
    setForm((prev) => ({ ...prev, ...userData }));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.name.length < 4) {
      alert("Name length should be greater than 4");
      return;
    }

    await updateProfile(form, session.user.name);
    alert("Profile Updated");
  };


  return (
    <div className="container mx-auto w-[40vw] flex flex-col gap-2 py-6">
      <h1 className="text-3xl text-center">Welcome to your Dashboard</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <InputField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <InputField
          label="Email"
          name="email"
          value={session?.user?.email || ""}
          readOnly
        />

        <InputField
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />

        <InputField
          label="Profile Picture Url"
          name="profilepic"
          value={form.profilepic}
          onChange={handleChange}
        />

        <InputField
          label="Cover Picture Url"
          name="coverpic"
          value={form.coverpic}
          onChange={handleChange}
        />

        <InputField
          label="Razorpay ID"
          name="razorpay_id"
          value={form.razorpay_id}
          onChange={handleChange}
        />

        <InputField
          label="Razorpay Secret"
          name="secret"
          value={form.secret}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="text-white w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center mt-4"
        >
          Save
        </button>
      </form>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, readOnly = false }) => (
  <div className="flex flex-col gap-0.5">
    <label htmlFor={name}>{label}</label>
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      className={`bg-slate-600 rounded-lg py-1 px-3 outline-none border border-slate-100 ${
        readOnly ? "opacity-60 cursor-not-allowed" : ""
      }`}
    />
  </div>
);

export default Dashboard;

