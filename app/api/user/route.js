// import dbConnect from "@/lib/mongodb";
// import User from "@/models/User";
// import { NextResponse } from "next/server";

import dbConnect from "@/app/lib/mongodb";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

// GET users


export async function GET(request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        
        const email = searchParams.get('email');

        console.log('Email query received:', email);

        if (email) {
            // Fetch single user by email
            const user = await User.findOne({ email: email.toLowerCase() });
            if (!user) {
                return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
            }
            return NextResponse.json({ success: true, data: user }, { status: 200 });
        }

        // Fetch all users if no email is provided
        const users = await User.find({});
        return NextResponse.json({ success: true, data: users }, { status: 200 });

    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}


// POST create user
export async function POST(req) {
    await dbConnect();
    console.log("post req was send")
    try {
        const { name, email, role } = await req.json();
        if (!name || !email || !role) {
            return NextResponse.json(
                { success: false, error: `Missing required fields: name:${name},email:${email},role: ${role} ` },
                { status: 400 }
            );
        }
        const newUser = new User({
            name,
            email,
            role
        })
        await newUser.save();
        return NextResponse.json(
            {
                success: true,
                data: newUser,
                message: "User created successfully"
            },
            { status: 201 });
    } catch (error) {
        console.log("Error saving user:", error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
