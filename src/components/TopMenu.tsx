import Image from "next/image"
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Link from "next/link";

export default async function TopMenu () {
    const session = await getServerSession(authOptions)

    return (
        <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-gray-300 flex items-center justify-between px-4">

            {/* LEFT SIDE */}
            <div className="flex items-center gap-4">
                {
                    session && (
                        <Link 
                            href="/mybooking"
                            className="text-cyan-600 text-sm"
                        >
                            My Booking
                        </Link>
                    )
                }

                {
                    session 
                    ? (
                        <Link 
                            href="/api/auth/signout"
                            className="text-cyan-600 text-sm"
                        >
                            Sign-Out of {session.user?.name}
                        </Link>
                    )
                    : (
                        <Link 
                            href="/api/auth/signin"
                            className="text-cyan-600 text-sm"
                        >
                            Sign-In
                        </Link>
                    )
                }
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-6">
                <TopMenuItem title="Booking" pageRef="/booking" />
                <TopMenuItem title="Select Venue" pageRef="/venue" />

                <div className="h-[40px] w-[100px] relative">
                    <Image
                        src="/img/logo.png"
                        alt="logo"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>

        </div>
    );
}