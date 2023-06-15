import { Modal } from "@mui/material";
import Styles from "./Thanks.module.css";

const ThankYou = (props) => {
  return (
    <Modal open={props.showThankYou} onClose={props.closeThankYou}>
      <div className={Styles.thankYouContainer}>
        <h2>Thank you for joining us!</h2>
      </div>
    </Modal>
  );
};

export default ThankYou;
