import { IconSearch } from "../icons";

export const SearchInput = (props) => {
  return (
    <div className="flex items-center bg-neutral-header py-3 px-4 gap-4 rounded-lg">
      <IconSearch />
      <input
        className="w-full text-neutral-text leading-[125%] text-[20px] placeholder:text-neutral-text"
        type="text"
        {...props}
      />
    </div>
  );
};
