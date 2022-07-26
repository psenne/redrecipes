import { routes, Link } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article key={article.id}>
      <header>
        <h3>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h3>
      </header>
      <p>{article.body}</p>
      <address>Posted at: {article.createdAt}</address>
    </article>
  )
}

export default Article
