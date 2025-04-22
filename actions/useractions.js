"use server"

import connectDB from "@/Db/connectDb"
import User from "@/models/User"


export const fetchuser = async (username) =>{
    await connectDB()
    let u = await User.findOne({username: username})
    let user = u.toObject({flattenObjectIds: true})
    return user;
}

export const updateProfile = async (data, oldusername) =>{
    await connectDB()
    let ndata = Object.fromEntries(data);

    if(oldusername !== ndata.username){
        let u = await User.findOne({username: ndata.username});
        if(u){
            return {error: "Username already exists!"}
        }
    }

    await User.updateOne({email: ndata.email}, ndata)
}
