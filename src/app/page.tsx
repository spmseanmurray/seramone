import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col flex-grow items-center justify-between content-center">
      {!session?.user ? (
        <div>Please Log In</div>
      ) : (
        <div>Welcome {session?.user.name}</div>
      )}
    </div>
  );
}
