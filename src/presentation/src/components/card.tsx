import "../styles/card.style.css";

const card = ({ item }: any) => {
  return (
    <div className="card">
      <img alt="portrait" src={item?.img} />
      <div className="legend" style={{ backgroundColor: item?.color }}>
        <p className="description">{item?.description}</p>
      </div>
    </div>
  );
};

export default card;
