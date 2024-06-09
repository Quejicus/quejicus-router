import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la home',
    description: '¡Hola! Soy Quejicus y estoy creando un clon de React Router.'
  },
  en: {
    title: 'About us',
    button: 'Go to home page',
    description: 'Hi! I am Quejicus and I am creating a clone of React Router.'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src='https://pbs.twimg.com/profile_images/1719692134180143104/d1ehMINv_400x400.jpg'
          alt='Quejicus image'
        />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
