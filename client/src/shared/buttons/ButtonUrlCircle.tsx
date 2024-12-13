import '@types/shared/button.type.ts';

const ButtonUrlCircle = ({ href, content }: TButton) => {
  return (
    <a
      className="flex items-center justify-center h-10 p-[0.5rem_1rem] max-w-40 text-white bg-sky-500 rounded-md border-2 border-sky-700 shadow-2xl active:bg-sky-600 hover:bg-sky-600 transition-[background; 3s]"
      href={href}
    >
      {content}
    </a>
  );
};

export default ButtonUrlCircle;
