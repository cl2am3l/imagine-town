import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import s from "./Navbar.module.css";
interface Props {}

const Navbar = (props: Props) => {
  return (
    <>
      <div className={s.navbar}>
        <div className={s.dropdown}>
          <button className={s.dropbtn}>
            <Link href="/">
              <a>Navbar</a>
            </Link>
          </button>
        </div>
        <div className={s.dropdown}>
          <button className={s.dropbtn}>
            <Link href="/women">
              <a>Women</a>
            </Link>
          </button>
        </div>
        <div className={s.dropdown}>
          <button className={s.dropbtn}>
            <Link href="/men">
              <a>Men</a>
            </Link>
            <i className={s.fa}></i>
          </button>
          <div className={s.dropdowncontent}>
            <div className={s.row}>
              <div className={s.column}>
                <h3>Category 1</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              <div className={s.column}>
                <h3>Category 2</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              <div className={s.column}>
                <h3>Category 3</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
