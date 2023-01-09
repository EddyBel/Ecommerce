import { DropDownButton } from "../common/button_drop_down";

export function FilterSettings() {
  return (
    <div className="filter__settings">
      <div className="filter__settings__menus">
        <DropDownButton
          options={["max 900$", "min 100$"]}
          size={200}
          title="Price"
        />
        <DropDownButton options={["Good", "Bad"]} size={200} title="Review" />
        <DropDownButton options={["Black", "White"]} size={200} title="Color" />
        <DropDownButton
          options={["Metal", "Aluminum", "Plastic"]}
          size={200}
          title="Material"
        />
      </div>
      <DropDownButton
        options={["Lowest price", "Highest price"]}
        size={200}
        title="Short By"
      />
    </div>
  );
}
