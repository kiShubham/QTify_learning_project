import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ReactComponent as Down } from "../../assets/ArrowDown.svg";
import { ReactComponent as Up } from "../../assets/ArrowUp.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.heading}>FAQS</p>
      <div className={styles.accordianWrapper}>
        <Accordion>
          <AccordionSummary
            expandIcon={<Down />}
            collapseIcon={<Up />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className={styles.Questions}>Is QTify free to use?</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.answer}>
              Yes! It is 100% free, and has 0% ads!
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<Down />}
            collapseIcon={<Up />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <p className={styles.Questions}>
              Can I download and listen to songs offline?
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className={styles.answer}>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default Footer;
