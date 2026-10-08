import Link from "next/link";

export default function TOC(){
    return(
        <div>
          <h3>Ibrahim Almania</h3>
          <h3 style={{textAlign: "center"}}>أذكر الله يذكرك</h3>
      <ul>
        <li>
            <Link href="/labs">Home</Link>
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
        <li>
          <Link id="wd-toc-book-link" href="https://kambaz.dev/book/ch1">Chapter 1</Link>
        </li>
        <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
        </li>
      </ul>
    </div>
    )
}