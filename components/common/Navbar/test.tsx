import React, { ReactElement } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import s from "./Navbar.module.css";
import Modal from "react-modal";
import megamenu from "./megamenu.json";

export interface Menu {
  id: string;
  link: string;
  title: string;
}

export interface Detail {
  id: string;
  link: string;
  title: string[];
  heading: string[];
}

export interface Data {
  menu: Menu[];
  detail: Detail[];
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface Props {}

export default function Navbar({}: Props): ReactElement {
  const { menu } = megamenu;
  // let i = 0;
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalAsideIsOpen, setAsideIsOpen] = React.useState(false);
  function openAsideModal() {
    setAsideIsOpen(true);
  }
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeAsideModal() {
    setAsideIsOpen(false);
  }
  function closeModal() {
    setIsOpen(false);
  }
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
        {menu.map((item) => (
          <div key={item.id} className={s.dropdown}>
            <button className={s.dropbtn}>
              <Link href={item.link}>
                <a>{item.title}</a>
              </Link>
            </button>
            <div className={s.dropdowncontent}>
              <div className={s.column}>
                <ul>
                  {/* {detail.slice().map((idx, i) => (
                    <div key={idx.id}>
                      <h3>{item.title}</h3>
                      <li >{idx.title[i++]}</li>
                    </div>
                  ))} */}
                </ul>
              </div>
            </div>
          </div>
        ))}
        <div className={s.dropdown}>
          <form className={s.forminline} action="#">
            <input
              className={[s.formcontrol, s.mrsm2].join(" ")}
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div>
          <button onClick={openModal}>Open Modal</button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            // style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
        </div>
        <div>
          <button onClick={openAsideModal}>Open Modal</button>
          <Modal
            isOpen={modalAsideIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeAsideModal}
            // style={customAsideStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
              Hello Aside modal
            </h2>
            <button onClick={closeAsideModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
        </div>
      </div>
    </>
  );
}
