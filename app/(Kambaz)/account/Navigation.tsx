import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg text-red-600">
      <Link href="/account/signin" className="list-group-item active border-0">Signin</Link>
      <Link href="/account/signup" className="list-group-item border-0 text-red-600">Signup</Link>
      <Link href="/account/profile" className="list-group-item border-0 text-red-600">Profile</Link>
    </div>
  );
}