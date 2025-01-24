import { auth, signOut, signIn } from "@/auth";

export default async function Home() {
  const session = await auth();
  // console.log("SESSION: ", session);
  // --OUTPUT-- if user not login
  // SESSION: null
  // --OUTPUT-- if user login
  // SESSION: {
  //   user: {
  //     name: 'your name',
  //     email: 'your email',
  //     image: 'your image link'
  //   },
  //   expires: '2027-02-13T06:14:12.116Z'
  // }

  return (
    <div>
      {
        session && session?.user ? (
          <form action={async () => {
            "use server";

            await signOut({ redirectTo: "/" });
          }}>
            <button type="submit">Logout</button>
          </form>
        ) : (
          <form action={async () => {
            "use server";

            await signIn("github");
          }}>
            <button type="submit">Login</button>
          </form>
        )
      }
    </div>
  );
}
