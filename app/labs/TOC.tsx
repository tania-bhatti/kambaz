import Link from "next/link";

export default function TOC() {
  return (
    <div>
      <p>Tania Bhatti</p>
      <ul>
        <li>
          <Link id="wd-home-link" href="/labs">Home</Link> 
        </li>
        <li>
          <Link id="wd-lab1-link" href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link id="wd-lab2-link" href="/labs/lab2">Lab 2</Link>
        </li>
        <li>
          <Link id="wd-lab3-link" href="/labs/lab3">Lab 3</Link>
        </li>
        <li>
          <Link id="wd-lab4-link" href="/labs/lab4">Lab 4</Link>
        </li>
        <li>
          <Link id="wd-toc-book-link" href="/book/ch1">
            Chapter 1
          </Link>
        </li>
        <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
      </ul>
    </div>
  );
}