import Link from "next/link";

export default function Labs(){
    return(
        <div id="wd-labs">
      <h1>Labs</h1>
      <h2>Ibrahim Almania</h2>
      <p>CS5610 Section 02</p>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link id="wd-lab4-link" href="/labs/lab4">Lab 4</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/IbrahimAlmanea/webdev-client.git"
            id="wd-github"
            target="_blank"
            rel="noreferrer"
          >
            webdev-client GitHub repository
          </a>
        </li>
        <li>
          <a
            href="https://github.com/IbrahimAlmanea/webdev-server.git"
            target="_blank"
            rel="noreferrer"
          >
            webdev-server GitHub repository
          </a>
        </li>
        <li>
          <a
            href="https://webdev-server-g62s.onrender.com"
            target="_blank"
            rel="noreferrer"
          >
            Root URL of my deployed server
          </a>
        </li>
      </ul>
    </div>
    )
}