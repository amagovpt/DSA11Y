import { Link } from "../../components/index";
import "./abilities.css";

export const AbilityDescription = ({ title, children, imageSrc, linkHref }) => {
  return (
    <section className="abilities-card">
      <img src={imageSrc} alt="" className={"image"} />
      <h3 className={"title"}>{title}</h3>
      <span className={"content"}>{children}</span>
      <Link text="Read more" to={linkHref} />
    </section>
  );
};
