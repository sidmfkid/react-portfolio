function Pill(props) {
  const pillTitle = props.pillTitle;

  return (
    <div className="pill-wrapper">
      <input
        name="quickBarFilter"
        type="radio"
        value={pillTitle}
        id={"pill" + pillTitle}
      ></input>
      <label className="pill" for={"pill" + pillTitle}>
        <span>{pillTitle}</span>
      </label>
    </div>
  );
}

export default Pill;
