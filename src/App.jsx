import './App.css'

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>Family Game Fans - Stream Overlays</h1>
        <div className="cards-grid">
          <div className="card">
            <h2>Starting Soon</h2>
            <p>Perfect for when you're about to start your stream</p>
            <a href="/starting-soon.html" target="_blank">View Overlay</a>
          </div>
          
          <div className="card">
            <h2>Be Right Back</h2>
            <p>Quick break overlay for short interruptions</p>
            <a href="/be-right-back.html" target="_blank">View Overlay</a>
          </div>
          
          <div className="card">
            <h2>Be Back in Minutes</h2>
            <p>Timed break overlays for longer breaks</p>
            <div className="timer-variants">
              <a href="/be-back-in-minutes.html?time=10" target="_blank">10 min</a>
              <a href="/be-back-in-minutes.html?time=20" target="_blank">20 min</a>
              <a href="/be-back-in-minutes.html?time=30" target="_blank">30 min</a>
            </div>
          </div>
          
          <div className="card">
            <h2>Questions</h2>
            <p>Q&A session overlay for viewer interaction</p>
            <a href="/questions.html" target="_blank">View Overlay</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
