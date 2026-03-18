'use client'
import { useState } from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Banner () {
    const banner = [
        {img: "/img/cover.jpg", textColor: "!text-white", objectFit: "cover"},
        {img: "/img/cover2.jpg", textColor: "!text-black", objectFit: "contain"},
        {img: "/img/cover3.jpg", textColor: "!text-white", objectFit: "cover"},
        {img: "/img/cover4.jpg", textColor: "!text-red-800", objectFit: "contain"},
    ]

    const [index, setIndex] = useState(0);
    const { data:session } = useSession();

    console.log(session?.user.token)
    
    const nextImage = () => {
        setIndex((index + 1) % banner.length);
    }

    return (
        <div className = {styles.banner}>
            <Image src = {banner[index].img}
            alt = 'cover'
            fill = {true}
            objectFit={banner[index].objectFit}
            onClick={nextImage}/>
            <div className = {styles.bannerText}>
                <h1 className={`text-center font-[Verdana] text-[24pt] font-bold ${banner[index].textColor}`}>where every event finds its venue</h1>
                <h3 className={`text-center font-[Verdana] text-[18pt] ${banner[index].textColor}`}>description</h3>
            </div>
            {
                session? <div className= {`z-30 absolute top-5 right-10 font-semibold ${banner[index].textColor} text-x1`}>
                    Welcome {session.user?.name}
                </div> : null
            }
        </div>
    );
}