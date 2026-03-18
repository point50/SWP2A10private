'use client'
import DateReserve from "@/components/DateReserve";
import { addBooking } from "@/redux/features/bookSlice";
import { AppDispatch } from "@/redux/store";
import { Select, MenuItem, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BookingItem } from "../../../interface";


export default function page() {
    const dispatch = useDispatch<AppDispatch>();

    const [name, setName] = useState<string|null>("");
    const [tel, setTel] = useState<string|null>("");
    const [venue, setVenue] = useState<string|null>("");
    const [date, setDate] = useState<Dayjs|null>(null);

    const makeBooking = () => {
        if (name && tel && venue && date) {
            const item:BookingItem = {
                nameLastname: name,
                tel: tel,
                venue: venue,
                bookDate: dayjs(date).format('YYYY/MM/DD')
            }
            alert(item.nameLastname + " " + item.tel + " " + item.venue + " " + item.bookDate);
            dispatch(addBooking(item));
        }
    };

    return (
        <div className="!mt-15">
            <form className="w-2/4 flex flex-col gap-5">
                <TextField
                    variant="standard"
                    name="Name-Lastname"
                    label="Name-Lastname"
                    fullWidth
                    onChange={(e)=>setName(e.target.value)}
                />

                <TextField
                    variant="standard"
                    name="Contact-Number"
                    label="Contact-Number"
                    fullWidth
                    onChange={(e)=>setTel(e.target.value)}
                />

                <Select variant = "standard" id="venue" value = {venue} onChange={(e)=>setVenue(e.target.value)}>
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>

                <DateReserve onDateChange={(value:Dayjs) => {setDate(value)}}/>

                <button type="button" name = "Book Venue" className="h-10 px-4 bg-indigo-600 !text-white rounded" 
                onClick={makeBooking}>Book Venue</button>
            </form>
        </div>
    );
}