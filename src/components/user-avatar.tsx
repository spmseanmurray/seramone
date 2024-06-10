import { auth } from "@/lib/auth";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user?.image) return null;

  return (
    <div className="avatar">
      <div className="w-10 mask mask-squircle">
        <img src={session.user.image} alt="User Avatar" />
      </div>
    </div>
  );
}
