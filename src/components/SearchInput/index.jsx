import { IconSearch } from "../icons";
import style from "./search-input.module.css";

export const SearchInput = (props) => {
  return (
    <div className={style.container}>
      <IconSearch />
      <input className={style.input} {...props} />
    </div>
  );
};
