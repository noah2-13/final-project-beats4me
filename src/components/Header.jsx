function Header({ title, subtitle }) {
  return (
    <div className="m-6 p-3 border">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h3 className="text-xl">{subtitle}</h3>
    </div>
  );
}

export default Header;