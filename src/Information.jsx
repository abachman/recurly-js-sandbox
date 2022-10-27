import { Link } from "react-router-dom"

export const Information = () => {
  return (
    <div className="info">
      <p>
        Some information about this site.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  )
}