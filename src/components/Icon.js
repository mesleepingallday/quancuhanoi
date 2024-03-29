export default function Icon({ children, text = "", link }) {
  return (
    <div className="flex flex-row">
      {children}
      <a
        href={link}
        target="_blank"
        className="flex flex-row self-center text-white/80 ms-1"
      >
        {text}
      </a>
    </div>
  );
}
