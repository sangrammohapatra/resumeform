import { Modal } from "@mui/material";
import Styles from "./Thanks.module.css";

const ThankYou = (props) => {
  const url =
    "https://somaditya-bindhani-git-dynamic-website-somaditya-bindhani.vercel.app/" +
    props.id;
  return (
    <Modal open={props.showThankYou} onClose={props.closeThankYou}>
      <div className={Styles.thankYouContainer}>
        <h2>Thank you for joining us!</h2>
        <p>You can access your Portfolio website in the below link</p>
        Your id is {props.id}
        <a href={url} target="_blank" without={true} rel="noreferrer">
          My Portfolio Website
        </a>
      </div>
    </Modal>
  );
};

export default ThankYou;
