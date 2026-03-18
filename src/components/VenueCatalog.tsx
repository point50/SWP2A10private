import Link from "next/link";
import Card from "./Card";
import type { VenueItem, VenueJson } from "../../interface";

export default async function VenueCatalog({venuesJson}:{venuesJson: Promise<VenueJson>}) {
    const data = await venuesJson;

    return (
        <>
        Explore {data.count} venues in out catalog
        <div style = {{margin : "20px", display: "flex", flexDirection: "row", alignContent: "space-around", justifyContent: "space-around", flexWrap: "wrap", padding: "10px"}}>
            {
                data.data.map((venueItem:VenueItem) => (
                    <Link href = {`/venue/${venueItem.id}`} key = {venueItem.id} className="w-1/5">
                        <Card venueName={venueItem.name} imgSrc={venueItem.picture} />
                    </Link>
                ))
            }
        </div>
        </>
    )
}