import Image from "next/image"
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Link from "next/link";

export default async function TopMenu () {
    const session = await getServerSession(authOptions)

    return (
        <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-gray-300 flex flex-row-reverse items-center">

            <div className="h-full w-[100px] relative">
                <Image
                    src="/img/logo.png"
                    alt="logo"
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>

            <TopMenuItem title="Booking" pageRef="/booking" />
            <TopMenuItem title="Select Venue" pageRef="/venue" />
            
            {
                session? <Link href = "api/auth/signout"> <div className = "flex center absolute left-0 h-full px-2 text-cyan-600 text-sm">Sign-Out of {session.user?.name} </div></Link> : <Link href = "api/auth/signin"><div className = "flex center absolute left-0 h-full px-2 text-cyan-600 text-sm">Sign-In</div></Link>
            }
        </div>
    );
}