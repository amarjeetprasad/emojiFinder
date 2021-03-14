import "../styles.css";
export default function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Emoji Finder</h1>
      <input type="text" name="emoji" placeholder="Enter your Emoji here..." />
    </div>
  );
}
