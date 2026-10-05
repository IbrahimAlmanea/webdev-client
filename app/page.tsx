import Link from "next/link";
export default function home(){
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link href="./labs">go to labs </Link>
    </div>
  );
  }