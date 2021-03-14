import "../styles.css";

export default function Card(props) {
  return (
    <div className="emoji-card">
      <h1 className="face">{props.face}</h1>
      <p className="title">{props.title}</p>
      <p className="about">{props.about}</p>
    </div>
  );
}
