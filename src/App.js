import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = [
  {
    path: '/',
    element: <HomePage/>,
    excact: false,
  },
  {
    path: '/todo',
    element: <TodoPage/>,
    excact: false,
  },
]

function App() {
  return (
    <div className="App">
      <Routes>
        {router.map(({path, element, excact}) => (<Route key={path} path={path} element={element} excact={excact}/>))}
      </Routes>
    </div>
  );
}

export default App;
