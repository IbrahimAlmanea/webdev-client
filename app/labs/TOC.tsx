import Link from "next/link";

export default function TOC(){
    return(
        <div>
      <ul>
        <li>
            <Link href="./labs">Home</Link>
        </li>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>
      </ul>
    </div>
    )
}