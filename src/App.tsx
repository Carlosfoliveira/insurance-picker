import { Main, Form } from './pages';
import GlobalStyle from './styles/global';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { InsuranceProvider } from './common/contexts';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <InsuranceProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </InsuranceProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
