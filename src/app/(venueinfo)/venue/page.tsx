import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";

export default async function Page() {
  const venues = await getVenues();
  return (
    <div>
      <main className="!mt-20">
        <VenueCatalog venuesJson={venues}/>
      </main>
    </div>
  );
}
