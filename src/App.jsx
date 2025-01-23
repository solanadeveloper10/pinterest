import './App.css'

function App() {

  return (
    <div className='wrapper'>
      <aside className='toolbar'>
        <div className='socials-container'>
          <a className="social-link" href="/">
            <img className="social-img" src="/images/icons/pinterest.png" />
          </a>
          <a className="social-link" href="#twitter">
            <img className="social-img" src="/images/icons/x.jpg" />
          </a>
          <a className="social-link" href="#telegram">
            <img className="social-img" src="/images/icons/tg.png" />
          </a>
          <a className="social-link" href="#dexscreener">
            <img className="social-img" src="/images/icons/dex_screener.jpg" />
          </a>
          <a className="social-link" href="#dextools">
            <img className="social-img" src="/images/icons/dextools.jpg" />
          </a>
        </div>
      </aside>

      <div className="spinner">
        <img src="/images/icons/pinterest_spinner.webp" alt="Spinner" className='spinner-img'/>
      </div>

      <section className='content'>
        <h1 className='title'>Pinterest</h1>

        <p className='contract'>
          CA:&nbsp;trumpdJmqbcytBWLYbtY8Mf6BR8azw4Ht3sZbsY25v3
        </p>

        <a href="#" target='_blank' className='buy-link'>
          BUY
        </a>
      </section>
    </div>
  )
}

export default App
