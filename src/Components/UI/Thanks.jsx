import { Button, Modal } from "@mui/material";
import Styles from "./Thanks.module.css";

const ThankYou = (props) => {
  const url =
    "https://somaditya-bindhani-git-dynamic-website-somaditya-bindhani.vercel.app/" +
    props.id;
  return (
    <Modal open={props.showThankYou} onClose={props.closeThankYou}>
      <div className={Styles.thankYouContainer}>
        <h2 className={Styles.thankYou}>Thank you for joining us!</h2>
        <span className={Styles.idContent}>Your id is {props.id}</span>
        <span className={Styles.content}>
          You can access your Portfolio website in the below link
        </span>
        <a href={url} target="_blank" without={true} rel="noreferrer">
          <Button> My Portfolio Website</Button>
        </a>
      </div>
    </Modal>
  );
};

export default ThankYou;
