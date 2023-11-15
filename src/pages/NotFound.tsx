import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h2>Page not Found!</h2>
      <p>Go to the <Link to='/'>Homepage</Link> </p>
    </div>
  )
}
