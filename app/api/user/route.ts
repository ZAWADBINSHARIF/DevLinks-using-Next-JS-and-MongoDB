import User from '@/models/User';
import { NextResponse } from 'next/server';


export async function GET() {
    try {
        const users = await User.find();

        if (users.length > 0) {

            return NextResponse.json({
                firstName: users[0].firstName,
                lastName: users[0].lastName,
                email: users[0].email,
                _id: users[0]._id
            });
        }

        return NextResponse.json({
            firstName: "",
            lastName: "",
            email: "",
            _id: null
        });


    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
            return NextResponse.json(
                {
                    error: error.message,
                },
                {
                    status: 500,
                }
            );
        } else {
            console.log('An unknown error occurred');
            return NextResponse.json(
                {
                    error: 'An unknown error occurred',
                },
                {
                    status: 500
                }
            );
        }
    }
}




export async function POST(req: Request) {

    try {

        const formData = await req.formData();

        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("email");

        console.log({ firstName, lastName, email });

        const newUser = new User({
            firstName,
            lastName,
            email
        });

        await newUser.save();


        return NextResponse.json({
            "message": "Profile has been update",
            _id: newUser._id
        });


    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
            return NextResponse.json(
                {
                    error: error.message,
                },
                {
                    status: 500,
                }
            );
        } else {
            console.log('An unknown error occurred');
            return NextResponse.json(
                {
                    error: 'An unknown error occurred',
                },
                {
                    status: 500
                }
            );
        }
    }
}

export async function PUT(req: Request) {

    try {

        const formData = await req.formData();

        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("email");
        const _id = formData.get("_id");

        if (!firstName || !lastName || !email || !_id) {
            return NextResponse.json({
                error: "Fill all the import"
            },
                {
                    status: 404
                });
        }

        const user = await User.findById(_id);

        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;


        await user.save();


        return NextResponse.json({
            message: "Profile has been updated"
        });


    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
            return NextResponse.json(
                {
                    error: error.message,
                },
                {
                    status: 500,
                }
            );
        } else {
            console.log('An unknown error occurred');
            return NextResponse.json(
                {
                    error: 'An unknown error occurred',
                },
                {
                    status: 500
                }
            );
        }
    }
}