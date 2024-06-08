import { Link } from '../Link.jsx'

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src='https://pbs.twimg.com/profile_images/1719692134180143104/d1ehMINv_400x400.jpg'
          alt='Quejicus image'
        />
        <p>Clon page React Router</p>
        <Link to='/'>Go to Home</Link>
      </div>
    </>
  )
}
