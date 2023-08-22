import { Button } from './components';
import { Feedcard } from './components'
import lampLogo from '/bulb-2.png';
import whiteArrow from '/white-arrow.png';
import whitePlus from '/white-plus.png';

function App() {

  return (
    <div className="main-container" id="main-container">
      <div className="feedback">
        <div className="feedcards" id="feedback-board">
          <div className="title">
            <h3>Frontend Mentor</h3>
            <p>Feedback Board</p>
          </div>
          <svg id="menu" width="20" height="17" viewBox="0 0 20 17" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="Group 3">
              <rect id="Rectangle" width="20" height="3" fill="white" />
              <rect id="Rectangle Copy" y="7" width="20" height="3" fill="white" />
              <rect id="Rectangle Copy 2" y="14" width="20" height="3" fill="white" />
            </g>
          </svg>
          <svg id="cross" width="18" height="17" viewBox="0 0 18 17" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="Group 3">
              <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd"
                d="M8.99989 6.37857L2.98948 0.368164L0.868164 2.48948L6.87857 8.49989L0.868164 14.5103L2.98948 16.6316L8.99989 10.6212L15.0103 16.6316L17.1316 14.5103L11.1212 8.49989L17.1316 2.48948L15.0103 0.368164L8.99989 6.37857Z"
                fill="white" />
            </g>
          </svg>
        </div>
        <div className="feedcards choices">
          <div className="row">
            <Button>All</Button>
            <Button>UI</Button>
            <Button>UX</Button>
          </div>
          <div className="row">
            <Button>Enhancement</Button>
            <Button>Bug</Button>
          </div>
          <div className="row">
            <Button>Feature</Button>
          </div>
        </div>
        <div className="feedcards roadmap">
          <div className="main">
            <div className="left">
              <h4>Roadmap</h4>
              <div className="condition">
                <div className="inlinediv" id="firstdiv"></div>
                <label>Planned</label>
              </div>
              <div className="condition">
                <div className="inlinediv" id="seconddiv"></div>
                <label>In-Progress</label>
              </div>
              <div className="condition">
                <div className="inlinediv" id="thirddiv"></div>
                <label>Live</label>
              </div>
            </div>
            <div className="right">
              <a href="#" id="roadmapbtn">View</a>
              <div className="flex">
                <label>2</label>
                <label>3</label>
                <label>1</label>
              </div>
            </div>
          </div>
        </div>


        

      </div>
      <div className="suggestions">
        <div className="nav">
          <img src={lampLogo} alt="bos seydi bu" id="lamp" />
          <h3>6 Suggestions</h3>
          <div id="summary">
            <p>Sort by : </p>
            <button id="dropbtn">
              Most Upvotes
              <img src={whiteArrow} alt="oxdu da" id="arrow" />
            </button>
          </div>
          <button id="add-feedback">
            <img src={whitePlus} id="plus" />
            Add Feedback
          </button>
          
        </div>


        <div className="feedback-cards">
          <Feedcard></Feedcard>
          <Feedcard></Feedcard>
          <Feedcard></Feedcard>
          <Feedcard></Feedcard>
          <Feedcard></Feedcard>
          <Feedcard></Feedcard>
        </div>
      </div>
    </div>
  )
}

export default App
