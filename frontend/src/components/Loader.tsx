// Credit: https://dribbble.com/shots/5092176-Newton-Loader
import "../styles/Loader.css"

export function Loader() {
  return <>
    <div className="loader">
      <span className="dot"></span>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </>
}