import React from "react";
import "./CurrencyDropdown.css";
import { FiChevronDown } from "react-icons/fi";

function CurrencyDropdown() {
  const [show, setShow] = React.useState(false);
  const [value, setValue] = React.useState("USD");
  const menuRef = React.useRef();

  const changeValue = (val) => {
    setValue(val);
    setShow(false);
  };

  React.useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={menuRef} className="currency_dropdown">
      <div onClick={() => setShow(!show)} className="currency_dropdown_btn">
        <p className="currency_dropdown_btn_title">{value}</p>
        <div className="currency_dropdown_btn_icon">
          <FiChevronDown />
        </div>
      </div>
      <div
        className={
          show
            ? "currency_dropdown_content show "
            : "currency_dropdown_content "
        }
      >
        <div
          onClick={() => changeValue("EUR")}
          className="currency_dropdown_content_title"
        >
          EUR
        </div>
        <div
          onClick={() => changeValue("JPY")}
          className="currency_dropdown_content_title"
        >
          JPY
        </div>
        <div
          onClick={() => changeValue("GBP")}
          className="currency_dropdown_content_title"
        >
          GBP
        </div>
        <div
          onClick={() => changeValue("USD")}
          className="currency_dropdown_content_title"
        >
          USD
        </div>
        <div
          onClick={() => changeValue("CAD")}
          className="currency_dropdown_content_title"
        >
          CAD
        </div>
      </div>
    </div>
  );
}

export default CurrencyDropdown;
