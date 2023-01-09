import { useEffect, useState } from "react";
import { ArrowDown } from "../common/svg";

type DropDownMenuProps = {
  title: string;
  size: number;
  options: string[];
};

export function DropDownButton(props: DropDownMenuProps) {
  const [dropdown, setDropDown] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="dropdown__menu">
      <h3 className="dropdown__menu__title">
        {props.title}{" "}
        <ArrowDown
          class="dropdown__menu__arrow_down"
          color="#000"
          height="10px"
          width="10px"
        />
      </h3>
      <ul className="dropdown__menu__options">
        {props.options.map((option) => (
          <li className="dropdown__menu__option" key={`option-${option}`}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
