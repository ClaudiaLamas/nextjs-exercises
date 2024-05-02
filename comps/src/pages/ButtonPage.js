import Button from "../components/Button";
import { GoBellFill, GoDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          onClick={handleClick}
          className="mb-5"
        >
          <GoBellFill />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>Hide Adds!</Button>
      </div>
      <div>
        <Button secondary outline>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Learn More!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
