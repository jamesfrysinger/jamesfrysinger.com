import {
  Button,
  FormControl,
  IconButton,
  Snackbar,
  TextField,
} from "@mui/material";
import Heading from "./common/Heading";
import Section from "./common/Section";
import emailjs from "emailjs-com";
import { FC, FormEvent, useRef, useState } from "react";
import {
  SERVICE_ID,
  TEMPLATE_ID,
  USER_ID,
} from "../config/credentials/credentials";
import { Close } from "@mui/icons-material";

const ContactMe: FC = () => {
  const [snack, setSnack] = useState<{
    isOpen: boolean;
    message: string;
  } | null>(null);
  const handleClose = () => setSnack(null);

  const [disabled, setDisabled] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID).then(
        (result) => {
          console.warn(`Contact form submit: ${result.text}`);
          setSnack({
            isOpen: true,
            message: "Your message was sent!",
          });
          setDisabled(false);
        },
        (error) => {
          console.warn(`Contact form submit: ${error.text}`);
          setSnack({
            isOpen: true,
            message: "There was an error. Please try again.",
          });
          setDisabled(false);
        }
      );
      formRef.current.reset();
    }
  };

  return (
    <Section>
      <Heading heading="Connect With Me" />
      <FormControl className="w-full ">
        <form
          ref={formRef}
          onSubmit={handleOnSubmit}
          className="w-full space-y-4 pt-2"
        >
          <TextField
            variant="filled"
            label="Your name"
            type="text"
            id="form-input-control-email"
            name="user_name"
            required
            className="w-full dark:text-white"
            disabled={disabled}
          />
          <TextField
            variant="filled"
            label="Your email address"
            type="email"
            id="form-input-control-last-name"
            name="user_email"
            required
            className="w-full"
            disabled={disabled}
          />
          <TextField
            variant="filled"
            label="Your message"
            multiline
            type="text"
            id="form-textarea-control-opinion"
            name="user_message"
            required
            className="w-full"
            disabled={disabled}
          />
          <Button
            variant="contained"
            size="large"
            type="submit"
            className="w-full"
            disabled={disabled}
          >
            Send
          </Button>
          <input type="hidden" value="James Frysinger" name="to_name" />
        </form>
      </FormControl>
      <Snackbar
        open={snack?.isOpen ?? false}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        message={snack?.message ?? ""}
        autoHideDuration={4000}
        onClose={handleClose}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <Close fontSize="small" />
          </IconButton>
        }
      />
    </Section>
  );
};

export default ContactMe;
