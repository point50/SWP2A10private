import DateReserve from "@/components/DateReserve";
import { Select, MenuItem, TextField } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";


export default async function Booking() {
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token);

    return (
        <div className="!mt-15">
            <h1 className="text-[26pt]">
                Venue Booking
            </h1>
             <div>
                <h2> User info</h2>
                <p>Name: {profile.data.name}</p>
                <p>Email: {profile.data.email}</p>
                <p>Tel.: {profile.data.tel}</p>
                <p>Member Since: {profile.data.createdAt}</p>
            </div>
            <form className="w-2/4 flex flex-col gap-5">
                <TextField
                    variant="standard"
                    name="Name-Lastname"
                    label="Name-Lastname"
                    fullWidth
                />

                <TextField
                    variant="standard"
                    name="Contact-Number"
                    label="Contact-Number"
                    fullWidth
                />

                <Select variant = "standard" id="venue">
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>

                <DateReserve/>

                <button name = "Book Venue" className="h-10 px-4 bg-indigo-600 !text-white rounded">Book Venue</button>
            </form>
        </div>
    );
}