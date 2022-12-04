import useBoardContext from "../hooks/useBoardContext";

const Tile = ({ id, x, y, odd, value }) => {
  const { dispatch } = useBoardContext();

  const onChange = (e) => {
    dispatch({
      type: "FILL-FIELD",
      payload: { value: e.target.value, id: id },
    });
  };

  return (
    <input
      className="tile"
      type="text"
      maxLength={1}
      value={value}
      onChange={onChange}
      style={
        odd
          ? { backgroundColor: "rgb(230, 230, 230)" }
          : { backgroundColor: "white" }
      }
    ></input>
  );
};

export default Tile;
