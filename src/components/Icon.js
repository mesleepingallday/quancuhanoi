export default function Icon({ children, text = "", link }) {
  return (
    <>
      <a href={link} target="_blank" className="grid grid-cols-2 text-white/80">
        {children}
        {text}
      </a>
    </>
  );
}
