"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";
export default function Profile() {
const [profile, setProfile] = useState<User | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();
  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);
  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };
  if (!profile) return null;
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Profile</h3>
      <input
        id="wd-username"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />
      <input
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        type="password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input 
      value={profile.firstName}
      onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      
      id="wd-firstname"
      className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      
        id="wd-lastname"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input 
      value={profile.email}
      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      
      className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <select 
      value={profile.role}
      onChange={(e) => setProfile({ ...profile, role: e.target.value })}
      
      className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <button className="mb-2 block w-full rounded-md bg-red-700 px-3 py-2 text-center text-white no-underline"
      type="button" onClick={signout} id="wd-signout-btn">
        Sign out
      </button>
    </div>
  );
}