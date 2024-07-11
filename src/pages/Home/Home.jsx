import { PhotoBox } from "../../components/PhotoBox/PhotoBox";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";

export function Home() {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/inner");
  };

  return (
    <div className={styles.home}>
      <PhotoBox
        name="John Doe"
        title="Programmer. Creative. Innovator"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque "
        avatar={require("../../assets/avatar.png")}
      />
      <Button text="Know more" onClick={handleKnowMore} />
    </div>
  );
}
