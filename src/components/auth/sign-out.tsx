import { signOut } from "@/lib/auth";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="btn btn-ghost text-neutral-content">
        <FaArrowRightFromBracket size="1.25rem" />
      </button>
    </form>
  );
}
