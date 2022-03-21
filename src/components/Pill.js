import { useRef } from "react";

function Pill(props) {
  const pillTitle = props.pillTitle;

  const pill = useRef(null);

  return (
    <div className="pill-wrapper">
      <input
        ref={pill}
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
