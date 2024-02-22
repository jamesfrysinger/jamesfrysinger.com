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
import { FC, useRef, useState } from "react";
import {
  SERVICE_ID,
  TEMPLATE_ID,
  USER_ID,
} from "../config/credentials/credentials";
import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";

const Contact: FC = () => {
  const [snack, setSnack] = useState<{
    isOpen: boolean;
    message: string;
  } | null>(null);
  const handleClose = () => setSnack(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [disabled, setDisabled] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = () => {
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
      formRef.current.value = " ";
      formRef.current.reset();
    }
  };

  return (
    <Section>
      <Heading heading="Connect With Me" />
      <FormControl className="w-full">
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-4 pt-2"
        >
          <TextField
            variant="standard"
            label="Your name"
            type="text"
            id="form-input-control-email"
            required
            className="w-full dark:text-white"
            disabled={disabled}
            {...register("user_name", { required: true })}
            error={Boolean(errors.user_name)}
          />

          <TextField
            variant="standard"
            label="Your email address"
            type="email"
            id="form-input-control-last-name"
            className="w-full"
            disabled={disabled}
            {...register("user_email", {
              required: "required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
              maxLength: 500,
            })}
            error={Boolean(errors.user_email)}
          />
          <TextField
            variant="standard"
            label="Your message"
            multiline
            type="text"
            id="form-textarea-control-opinion"
            className="w-full"
            disabled={disabled}
            {...register("user_message", { required: true })}
            error={Boolean(errors.user_message)}
          />
          <Button
            variant="contained"
            size="large"
            type="submit"
            className="w-full sm:w-1/2"
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

export default Contact;
