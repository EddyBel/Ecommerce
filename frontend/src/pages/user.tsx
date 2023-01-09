import { useUser } from "../hook/context";

export function User() {
  const { front, name, lastName, userName, background } = useUser();

  return (
    <div className="user">
      <div
        className="user__background"
        style={{ backgroundImage: `url(${background})` }}
      >
        <img src={front} alt="img" className="user__front" />
      </div>
      <div className="user__data">
        <h1 className="user_name">
          {name} {lastName}
        </h1>
        <span>({userName})</span>
        <div className="user__card__credit">
          <h4 className="user__card__credit__points"></h4>
        </div>
      </div>

      <div className="user__products__cart"></div>
    </div>
  );
}
