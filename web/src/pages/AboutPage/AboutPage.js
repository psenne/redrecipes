import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
<p>
  This is the about me page. I don't have anything to say though...
</p>
      <p>
        Go back <Link to={routes.home()}>home</Link>.
      </p>
    </>
  )
}

export default AboutPage
