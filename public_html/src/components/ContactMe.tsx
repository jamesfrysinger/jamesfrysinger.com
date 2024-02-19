import {
  Button,
  FormControl,
  Snackbar,
  SnackbarOrigin,
  TextField,
} from "@mui/material";
import Heading from "./common/Heading";
import Section from "./common/Section";
import { Send } from "@mui/icons-material";
import emailjs from "emailjs-com";
import { FormEvent, useRef, useState } from "react";

const ContactMe = () => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const SERVICE_ID = "default_service";
  const TEMPLATE_ID = "template_grxkgau";
  const USER_ID = "Nam9JiPoWz8W18IeA";

  const formRef = useRef<HTMLFormElement>(null);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID).then(
        (result) => {
          console.log(result.text);
          // SNACK
        },
        (error) => {
          console.log(error.text);
          // SNACK
        }
      );
      formRef.current.reset();
    }
  };

  return (
    <Section>
      <Heading heading="Contact Me" />
      <FormControl className="w-full">
        <form
          ref={formRef}
          onSubmit={handleOnSubmit}
          className="w-full space-y-4 pt-4"
        >
          <TextField
            variant="filled"
            label="Your name"
            type="text"
            id="form-input-control-email"
            name="user_name"
            required
            className="w-full"
          />
          <TextField
            variant="filled"
            label="Your email address"
            type="email"
            id="form-input-control-last-name"
            name="user_email"
            required
            className="w-full"
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
          />
          <Button
            variant="contained"
            size="large"
            type="submit"
            className="w-full"
          >
            Send
          </Button>
          <input type="hidden" value="James Frysinger" name="to_name" />
        </form>
      </FormControl>
      <Snackbar open={false} onClose={handleClose} message="I love snacks" />
    </Section>
  );
};

export default ContactMe;
