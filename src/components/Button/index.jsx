export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="hover:opacity-75 rounded-3xl border border-neutral-text py-2.75 px-6 flex items-center gap-2 text-neutral-text text-base leading-[120%]"
    >
      {children}
    </button>
  );
};
