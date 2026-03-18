'use client';
import { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";

//venue
const venues = [
  { vid: "001", venueName: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" },
  { vid: "002", venueName: "Spark Space", imgSrc: "/img/sparkspace.jpg" },
  { vid: "003", venueName: "The Grand Table", imgSrc: "/img/grandtable.jpg" }
];

//rating
const rating = new Map<string, number>();

rating.set("The Bloom Pavilion", 0);
rating.set("Spark Space", 0);
rating.set("The Grand Table", 0);

export default function CardPanel() {
    const ratingReducer = (
        ratingList: Map<string, number>,
        action: { type: "rate"; rate: number; placeName: string } | { type: "remove"; placeName: string }
    ) => {

        const newMap = new Map(ratingList);

        if (action.type === "rate") {
            newMap.set(action.placeName, action.rate);
        }

        if (action.type === "remove") {
            newMap.delete(action.placeName);
        }

        return newMap;
    };

    const [ratingList, dispatchRating] = useReducer(ratingReducer, rating);

    return (
        <div
            className="p-5 bg-gray-300 ">
            <div
                className="flex justify-between rounded-[10px] m-[10px]">
                {Array.from(venues).map((v) => (
                    <Link href = {`/venue/${v.vid}`} className="w-1/5">
                        <Card key = {v.vid} venueName={v.venueName} imgSrc={v.imgSrc} setRating={(place: string, rate: number) => dispatchRating({ type: "rate", rate: rate, placeName: place })} />
                    </Link>
                ))}
            </div>
            <div className="w-full text-xl font-medium"> Venue List with rating: {ratingList.size} </div>
            {Array.from(ratingList).map(([key, value]) => (
                <div key={key}
                    onClick={() => dispatchRating({ type: "remove", placeName: key })}
                    className="cursor-pointer hover:text-red-500"
                    data-testid={key}
                >
                    {key} : {value}
                </div>
            ))}
        </div>
    );
}