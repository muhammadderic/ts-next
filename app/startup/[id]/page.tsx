import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/queries";
import Link from "next/link";

interface StartupDetailProps {
  params: { id: string },
}

const Page = async ({ params }: StartupDetailProps) => {
  const id = params.id;
  const startup = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  return (
    <>
      <Link href="/" className="text-blue-500 underline">Back</Link>

      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">{startup.title}</h1>
        <p className="text-gray-600">{startup.category}</p>
        <p className="mt-4">{startup.description}</p>
        <p className="text-sm text-gray-500 mt-2">
          Views: {startup.views} | Created At: {new Date(startup._createdAt).toLocaleDateString()}
        </p>
        {startup.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={startup.image}
            alt={startup.title}
            className="mt-4 rounded-lg w-full" />
        )}
      </main>
    </>
  )
}

export default Page
