import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div>
      <nav>
        <Link href="/">Navbar</Link>
        <Link href="/women">Women</Link>
        <Link href="/men">Man</Link>
        <Link href="/kid">Kid</Link>
      </nav>
    </div>
  );
};

export default Navbar;
