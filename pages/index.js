"use client"

import Head from "next/head";

export default function Home() {

  function btnLoginClick() {
    console.log("click")
  }

  return (
    <>
      <Head>
        <title>Webbb3 | Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://static.wixstatic.com/media/0f5a1e_870a3767ff3b436383a5380bf9623279~mv2.png/v1/fill/w_1903,h_483,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/0f5a1e_870a3767ff3b436383a5380bf9623279~mv2.png" className="d-block mx-lg-auto img-fluid" width="700" height="500" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Meta-Science na WEB3</h1>
            <p className="lead">Comunidade Meta-Science</p>
            <p className="lead mb-3">Autentique-se com sua carteira e deixe o seu comentário</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" onClick={btnLoginClick} className="btn btn-primary btn-lg px-4 me-md-2">
                <img src="/metamask.svg" width="64" className="me-3" />
                Conectar com a MetaMask
              </button>
            </div>
          </div>
        </div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-body-secondary">&copy; 2024 Meta-Science, Inc</p>
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="/about" className="nav-link px-2 text-body-secondary">About</a></li>
          </ul>
        </footer>
      </div>
    </>
  );
}
