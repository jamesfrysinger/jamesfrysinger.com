interface IButton {
  text: string;
}
const Button = ({ text }: IButton) => {
  return <button>{text}</button>;
};
export default Button;
