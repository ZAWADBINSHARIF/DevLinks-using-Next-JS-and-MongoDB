import dbConnection from "@/database/dbConnection";
import { DevLinkType } from "@/interface";
import DevLink from "@/models/DevLink";
import { NextResponse } from "next/server";


dbConnection();

export async function GET() {

    try {

        const devLinks = await DevLink.find();

        if (devLinks.length > 0)
            return NextResponse.json({ devLinks: devLinks[0].links, _id: devLinks[0]._id });
        else
            return NextResponse.json({ devLinks: [] });


    } catch (error) {
        return NextResponse.json({
            error: error
        }, {
            status: 500
        });
    }

}

export async function POST(req: Request) {
    try {
        const { devLinks }: { devLinks: DevLinkType[]; } = await req.json();

        const newDevLinks = new DevLink({
            links: devLinks
        });

        await newDevLinks.save();


        return NextResponse.json({ message: 'Dev links has been saved', _id: newDevLinks._id });
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ message: 'Error', error: error?.message }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const { devLinks, _id }: { devLinks: DevLinkType[]; _id: string; } = await req.json();
        console.log(_id);
        if (!_id) {
            return NextResponse.json({ error: "_id was not found" }, { status: 404 });
        }

        const oldDevLinks = await DevLink.findById(_id);

        if (!oldDevLinks || !oldDevLinks.links) {
            return NextResponse.json({ error: "Dev links was not found" }, { status: 404 });
        }

        oldDevLinks.links = devLinks;

        await oldDevLinks.save();

        return NextResponse.json({ message: 'Dev links has been saved' });
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ message: 'Error', error: error?.message }, { status: 500 });
    }
}

