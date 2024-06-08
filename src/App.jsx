import { useEffect, useState } from 'react'
import { EVENTS } from './const'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

function Router ({ routes = [], defaultComponent: DefaultComponent = () => null }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  const Page = routes.find(({ path }) => path === currentPath)?.Component
  return Page ? <Page /> : <DefaultComponent />
}

function App () {
  return (
    <main>
      <Router routes={[
        {
          path: '/',
          Component: HomePage
        },
        {
          path: '/about',
          Component: AboutPage
        }
      ]}
      />
    </main>
  )
}

export default App
