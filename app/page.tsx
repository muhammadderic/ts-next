import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/queries";
import { Startup } from "@/sanity/types";

export default async function Home() {
  // OUTPUT: startups = a list [] of startups {}
  const startups = await client.fetch(STARTUPS_QUERY);

  return (
    <div>
      <h1>Hello Deric</h1>
      <Link href="/add">Add</Link>

      <ul>
        {startups.map((startup: Startup) => (
          <li key={startup._id}>
            <h5>{startup.title}</h5>
            <p>{startup.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
