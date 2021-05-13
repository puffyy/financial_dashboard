import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col flex-wrap min-h-screen h-full m-0 p-0 bg-white dark:bg-gray-900 min-w-screen w-full overflow-hidden">
    <Header />
    <Main />
    <Footer />
    </div>
  );
}

export default App;
