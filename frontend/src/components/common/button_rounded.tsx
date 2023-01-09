import { Heart } from "../common/svg";

type Button_Props = {
  color: string;
  children: any;
};

export function ButtonRounded({ children, color }: Button_Props) {
  return (
    <button
      className={`button__rounded ${color} ${
        typeof children === "string" ? "text" : ""
      }`}
    >
      <div className="button_rounded_alert">3</div>
      {typeof children === "string" ? (
        <Heart
          width="10px"
          height="10px"
          color="#CD5C5C"
          class="heart_svg"
          key="Heart_svg"
        />
      ) : (
        <></>
      )}
      {children}
    </button>
  );
}
