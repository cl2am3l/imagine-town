import React, { ReactElement } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import s from "./Navbar.module.css";
import Modal from "react-modal";
import { GetStaticProps } from "next";
import megamenu from "./megamenu.json";

export interface Menu {
  id: string;
  link: string;
  title: string;
  category1: string[];
}

export interface Data {
  menu: Menu[];
}
interface Props {
  data: Data;
}

export default function Navbar({ data }: Props): ReactElement {
  // const { menu } = data;
  // console.log(data + "dsadsdasddasdasdas");
  return (
    <div>
      <div className={s.navbar}>
        <div className={s.dropdown}>
          <button className={s.dropbtn}>
            <Link href="/">
              <a>Navbar</a>
            </Link>
          </button>
        </div>
        {/* {menu.map((item) => (
          <div className={s.dropdown}>
            <button className={s.dropbtn}>
              <Link href={item.link}>
                <a>{item.title}</a>
              </Link>
            </button>
            <div className={s.dropdowncontent}>
              <div className={s.column}>
                <h3>{}</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}
export const getStaticProps: GetStaticProps = async (context) => {
  const data: Data = megamenu;
  return {
    props: {
      data,
    },
  };
};
