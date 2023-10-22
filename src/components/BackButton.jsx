import { useNavigate } from "react-router-dom";
import Button from "./Button";
//🔘🔘[REUSABLE BUTTON]🔘🔘 now we can import this button where we need it

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
