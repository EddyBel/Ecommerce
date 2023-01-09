import { Link } from "react-router-dom";
import { ButtonRounded, SearchEngine } from "../common/index";
import { Shopping, Envelope } from "../common/svg";
import { useUser } from "../../hook/context";

export function NavBar() {
  const { front, name } = useUser();

  return (
    <nav className="navbar">
      <div className="navbar__left__options">
        <Link to="/">
          <h1 className="navbar__title">ShopIn</h1>
        </Link>
        <div className="navbar__container__options">
          <a href="#" className="navbar__item">
            Categories
          </a>
          <a href="#" className="navbar__item">
            Deals
          </a>
          <a href="#" className="navbar__item">
            What`s New
          </a>
          <a href="#" className="navbar__item">
            Delivery
          </a>
        </div>
        <SearchEngine />
      </div>

      <div className="navbar__right__options">
        <ButtonRounded color="rose">Summer Sales</ButtonRounded>
        <ButtonRounded color="rose">
          <Shopping
            width="100%"
            height="100%"
            color="#CD5C5C"
            class="Shopping_svg"
            key="Shopping_svg"
          />
        </ButtonRounded>
        <ButtonRounded color="green">
          <Envelope
            width="100%"
            height="100%"
            color="#0B5345"
            class="envelope_svg"
            key="envelope_svg"
          />
        </ButtonRounded>
        <div className="navbar__user__container">
          <Link to="/user">
            <img
              src={front}
              alt="user images"
              className="navbar__user__images"
            />
          </Link>
          <div className="navbar__user__container-texts">
            <h5 className="navbar__text__greetings">Hi! Welcome!</h5>
            <h5 className="navbar__text__name__user">{name}</h5>
          </div>
        </div>
      </div>
    </nav>
  );
}
