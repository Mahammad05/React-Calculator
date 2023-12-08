import Buttons from "./Buttons";

const ButtonBox = ({ handleBtnClick }) => {

  return (
      <div className="numbers-operators">
        <Buttons handleBtnClick={handleBtnClick} />
      </div>
  );
}

export default ButtonBox;
