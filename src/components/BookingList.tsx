"use client"
import { removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch, useAppSelector } from "@/redux/store"
import { ClassNames } from "@emotion/react";
import { useDispatch } from "react-redux";
export default function BookingList () {
    const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>()
    return (
        <>
        {
            bookItems.length > 0 ? bookItems.map((bookItem) => (
                <div className = "bg-slate-200 rounded px-5 mx-5 py-5 my-2 block">
                    <div className = "text-xl">{bookItem.venue}</div>
                    <div className = "text-sm">{bookItem.nameLastname}</div>
                    <div className = "text-sm">{bookItem.tel}</div>
                    <div className = "text-sm">{bookItem.bookDate}</div>
                    <button className = "block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm"
                    onClick={() => {dispatch(removeBooking(bookItem)); alert("removed");}}>Cancel Booking</button>
                </div>
            )) :
            <div><h1>No Venue Booking</h1></div>
        }
        </>
    )
}