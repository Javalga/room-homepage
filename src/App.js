import './App.css';
import {ContentContainer} from './components/ContentContainer';
import {useRef} from 'react'

function App() {
  const SlideshowContainerRef = useRef(null)
  return (
    <div className="App">
      <ContentContainer>
      </ContentContainer>
    </div>
  );
}

export default App;
