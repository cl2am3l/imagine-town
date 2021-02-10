import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import s from "./Navbar.module.css";
import Modal from "react-modal";

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
const customAsideStyles = {
  content: {
    // position:"initial!important"
  },
};
// Modal.setAppElement(root)
interface Props {}

const Navbar = (props: Props) => {
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
        <div className={s.dropdown}>
          <button className={s.dropbtn}>
            <Link href="/women">
              <a>Women</a>
            </Link>
          </button>
        </div>
        ))} */}
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
            style={customStyles}
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
            style={customAsideStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello Aside modal</h2>
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
};

export default Navbar;
