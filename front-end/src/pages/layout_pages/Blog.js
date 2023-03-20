import { useState, useEffect } from "react";
import "./Blog.css";
import { getAllArticles } from "../../api";
import { Container } from "react-bootstrap";
import ArticleBlog from "../../components/blog/ArticleBlog";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  const loadData = async () => {
    const responseData = await getAllArticles();
    setArticles(responseData);
  };

  useEffect(()=>{
    document.title = "Blog";
     loadData();
  }, [])

  return (
    <>
      <section className="blog-hero">
        <div className="row blog-title">
          <div className="col-10">
            <h1 className="fw-bold text-white">
              Guida alla scelta dello strumento musicale
            </h1>
          </div>
        </div>
      </section>
      <Container className="main-box">
        <article className="mb-5">
          <p>
            La musica è un'arte universale che unisce le persone di tutte le età
            e di tutte le culture. Ogni tipo di musica richiede un'ampia gamma
            di strumenti musicali, ognuno con le proprie caratteristiche e
            peculiarità. Scegliere lo strumento musicale giusto è fondamentale
            per chi vuole iniziare a suonare o per chi vuole migliorare le
            proprie abilità. Tuttavia, con così tante opzioni disponibili sul
            mercato, la scelta può risultare un po' difficile. In questo blog,
            esploreremo alcuni dei fattori da considerare nella scelta dello
            strumento musicale perfetto per te. Ti forniremo informazioni sulla
            varietà di strumenti disponibili e sulle loro caratteristiche,
            nonché suggerimenti su come scegliere l'ideale in base alle tue
            preferenze musicali, alla tua esperienza e alle tue esigenze. Se sei
            un principiante, potresti chiederti quale strumento sia il più
            facile da imparare. Se sei un musicista esperto, potresti essere
            alla ricerca di un nuovo strumento che possa arricchire il tuo
            repertorio. In entrambi i casi, esamineremo le opzioni disponibili e
            ti aiuteremo a capire quale strumento sia il più adatto per te.
            Inoltre, parleremo anche dell'importanza di provare diversi
            strumenti prima di acquistarne uno. Infatti, suonare un determinato
            strumento richiede un certo livello di affinità e di comfort, e solo
            provandolo potrai capire se ti senti a tuo agio con esso. Ti
            forniremo quindi consigli su come scegliere il negozio di strumenti
            musicali giusto e come approcciare il processo di prova. Infine,
            discuteremo anche del budget da dedicare all'acquisto di uno
            strumento musicale. Ci sono strumenti costosi e altri meno costosi,
            ma tutti possono offrire una qualità e un suono eccezionali. Ti
            aiuteremo a comprendere quale sia il giusto rapporto qualità-prezzo,
            in modo da poter fare una scelta consapevole e informata. In
            sintesi, questo blog ti guiderà nella scelta dello strumento
            musicale giusto per te, fornendoti informazioni e consigli utili.
            Che tu sia un principiante o un musicista esperto, ti aiuteremo a
            trovare l'ideale strumento musicale per esprimere la tua creatività
            e la tua passione per la musica. Una delle ragioni principali che
            viene addotta come causa dell’interruzione degli studi musicali è un
            presunto errore nella scelta dello strumento. A volte anche
            musicisti professionisti ammettono di aver dedicato la loro vita ad
            uno strumento che successivamente si è rivelato non corrispondente
            ai loro desideri. La musica è prima di tutto “sentire”, questo
            aspetto implica approcci e atteggiamenti sempre diversi e legati ad
            una sfera intima, per questa ragione non bisogna mai tralasciare
            vissuti e aspetti personali.
          </p>
        </article>
        <div className="row card-deck">
          <hr></hr>
          {articles.map((article) => {
            return <ArticleBlog key={article.id} article={article} />;
          })}
        </div>
      </Container>
    </>
  );
};

export default Blog;
