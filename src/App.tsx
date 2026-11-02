import { useState } from 'react'
import './App.css'

const flowers = Array.from({ length: 19 }, (_, index) => index)
const hearts = Array.from({ length: 22 }, (_, index) => index)

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className={`garden ${isOpen ? 'garden--open' : ''}`}>
      {!isOpen ? (
        <section className="welcome" aria-label="Una sorpresa para ti">
          <span className="welcome__sparkle" aria-hidden="true">✦</span>
          <p className="welcome__eyebrow">UNA PEQUEÑA SORPRESA</p>
          <h1>Hay algo que quiero decirte...</h1>
          <button
            className="open-button"
            type="button"
            onClick={() => setIsOpen(true)}
          >
            DALE CLICK <span aria-hidden="true">♡</span>
          </button>
          <p className="welcome__hint">hecho con mucho cariño</p>
        </section>
      ) : (
        <>
          <div className="night-sky" aria-hidden="true">
            <span className="moon">☾</span>
            {hearts.map((heart) => (
              <span
                className="falling-heart"
                key={heart}
                style={{
                  left: `${(heart * 47 + 8) % 100}%`,
                  animationDelay: `${(heart % 11) * -0.83}s`,
                  animationDuration: `${7 + (heart % 5)}s`,
                  fontSize: `${14 + (heart % 4) * 5}px`,
                }}
              >
                {heart % 3 === 0 ? '💗' : heart % 3 === 1 ? '💕' : '♡'}
              </span>
            ))}
          </div>

          <section className="dedication" aria-label="Dedicatoria">
            <p className="dedication__eyebrow">PARA TI MI REINAA.</p>
            <span className="dedication__ornament" aria-hidden="true">✧　♡　✧</span>
            <h1>
              El amor es extraño y placentero, pero cuando estoy a tu lado
              quiero que se detenga el tiempo, <em>NUNCA</em> se te olvide que
              eres demasiado <strong>HERMOSA.</strong>
            </h1>
            <span className="dedication__signature">Con todo mi cariño ♡</span>

            <div className="music-card">
              <p className="music-card__label">UNA CANCIÓN PARA TI</p>
              <div className="video-frame">
                <iframe
                  src="https://www.youtube.com/embed/plB_2SogFso?autoplay=1&playsinline=1&si=-K9RLB0yAg72Iv_v"
                  title="Una canción para ti"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </section>

          <div className="flower-field" aria-hidden="true">
            {flowers.map((flower) => (
              <div
                className={`flower flower--${flower % 5}`}
                key={flower}
                style={{
                  left: `${(flower * 29 + 2) % 100}%`,
                  animationDelay: `${(flower % 9) * 0.13}s`,
                }}
              >
                <span className="flower__head">
                  {['🌷', '🌸', '🌼', '🌹', '🌷'][flower % 5]}
                </span>
                <span className="flower__stem" />
                <span className="flower__leaf flower__leaf--left" />
                <span className="flower__leaf flower__leaf--right" />
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  )
}

export default App
