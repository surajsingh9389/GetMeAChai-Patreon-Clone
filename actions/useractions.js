"use server"

import connectDB from "@/Db/connectDb"
import User from "@/models/User"


export const fetchuser = async (username) =>{
    await connectDB()
    let u = await User.findOne({username: username})
    let user = u.toObject({flattenObjectIds: true})
    return user;
}

export const updateProfile = async (form, oldusername) =>{
    await connectDB()
    const { name, username, profilepic, coverpic } = form;
    // const ndata = Object.fromEntries(data);
    if(oldusername !== name){
        const u = await User.findOne({username: name});
        if(u){
            return {error: "Username already exists!"}
        }
    }

    await User.updateOne({email: form.email},
       { $set: {name}},
    )
}
