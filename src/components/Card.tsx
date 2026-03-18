'use client'
import styles from "./card.module.css";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";

export default function Card({ venueName, imgSrc, setRating }: { venueName: string, imgSrc: string, setRating?: Function }) {
    return (
        <InteractiveCard contentName={venueName}>
            <div className={styles.cardimg}>
                <Image src={imgSrc}
                    alt="product"
                    fill
                    objectFit="cover" />
            </div>

            <div className={styles.cardText}>
                <h3 className="font-[Verdana] text-[14pt] font-bold">{venueName}</h3>
                <p className="font-[Verdana] text-[10pt]">description</p>
            </div>

            {
                setRating? <Rating
                    id={venueName + " Rating"}
                    name={venueName + " Rating"}
                    data-testid={venueName + " Rating"}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(event, newValue) => {
                        setRating?.(venueName, newValue);
                    }}
                /> : ''
            }
        </InteractiveCard>
    );
}