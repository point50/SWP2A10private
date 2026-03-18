import getVenue from "@/libs/getVenue";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ vid: string }> }) {
  const { vid } = (await params);
  const venueDatails = await getVenue(vid);

  // const venuesDetails = new Map();
  // venuesDetails.set("001", {venueName: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg"})
  // venuesDetails.set("002", {venueName: "Spark Space", imgSrc: "/img/sparkspace.jpg"})
  // venuesDetails.set("003", {venueName: "The Grand Table", imgSrc: "/img/grandtable.jpg"})

  return (
    <div>
      <main className="!mt-20 !ml-20 flex">
        <div className="w-[400px] h-[400px] relative">
          <Image src={venueDatails.data.picture}
            alt="product"
            fill
            objectFit="cover"/>
        </div>
        <div className="block">
          <h1 className="!mt-5 !ml-10 text-[22pt] font-bold">{venueDatails.data.name}</h1>
          <p className="!mt-5 !ml-10 text-[16pt]">{venueDatails.data.address + " " + venueDatails.data.district}</p>
          <p className="!mt-5 !ml-10 text-[16pt]">{venueDatails.data.province + " " + venueDatails.data.postalcode}</p>
          <p className="!mt-5 !ml-10 text-[16pt]">{venueDatails.data.tel}</p>
          <p className="!mt-5 !ml-10 text-[16pt]">{venueDatails.data.dailyrate + ".- /day"}</p>
        </div>
      </main>
    </div>
  );
}