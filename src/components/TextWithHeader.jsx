function TextWithHeader({ mySubtitle, myText }) {
  return (
    <div className="m-6 p-3 border">
      <p className="text-3xl font-bold">{mySubtitle}</p>
      <p className="text-xl">{myText}</p>
    </div>
  );
}

export default TextWithHeader;