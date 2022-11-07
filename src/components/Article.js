export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p>
            <img src={article.img} alt = " pic"/>
          </p>
          <p className="date">{`Posted: ${Date(article.date)}`}</p>
          <p className="body">{article.body}</p>
          
        </section>
      )}
    </article>
  );
}
