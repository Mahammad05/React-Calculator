const Buttons = ({ handleBtnClick }) => {

  return (
    <>
      <button id="seven" value="7" onClick={handleBtnClick}>
        7
      </button>
      <button id="eight" value="8" onClick={handleBtnClick}>
        8
      </button>
      <button id="nine" value="9" onClick={handleBtnClick}>
        9
      </button>
      <button className="function" id="delete" value="Backspace" onClick={handleBtnClick}>
        DEL
      </button>
      <button id="four" value="4" onClick={handleBtnClick}>
        4
      </button>
      <button id="five" value="5" onClick={handleBtnClick}>
        5
      </button>
      <button id="six" value="6" onClick={handleBtnClick}>
        6
      </button>
      <button id="add" value="+" onClick={handleBtnClick}>
        +
      </button>
      <button id="one" value="1" onClick={handleBtnClick}>
        1
      </button>
      <button id="two" value="2" onClick={handleBtnClick}>
        2
      </button>
      <button id="three" value="3" onClick={handleBtnClick}>
        3
      </button>
      <button id="subtract" value="-" onClick={handleBtnClick}>
        -
      </button>
      <button id="decimal" value="." onClick={handleBtnClick}>
        .
      </button>
      <button id="zero" value="0" onClick={handleBtnClick}>
        0
      </button>
      <button id="divide" value="/" onClick={handleBtnClick}>
        /
      </button>
      <button id="multiply" value="*" onClick={handleBtnClick}>
        x
      </button>
      <button className="function" id="clear" value="RESET" onClick={handleBtnClick}>
        RESET
      </button>
      <button id="equals" value="Enter" onClick={handleBtnClick}>
        =
      </button>
    </>
  );
};

export default Buttons;
