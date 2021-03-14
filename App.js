import './App.css';
import { NewsContextProvider } from './components/NewsContext';

import News from './components/news/News' 
function App() {
  return (
    <div className="App">
      <NewsContextProvider>
        <News />
      </NewsContextProvider>
    </div>
  );
}

export default App;
