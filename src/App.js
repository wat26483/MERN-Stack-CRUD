import './App.css';
import CreatePage from './components/CreatePage';
import ListPage from './components/ListPage';
import EditPage from './components/EditPage';
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className='box-border'>


      {/* header */}

      <div className='w-screen h-14 bg-slate-800 text-slate-100 flex items-center'>
        <ul className='flex justify-around h-3/5 items-center w-screen'>
          <li>
            <Link to="/"> React MERN CRUD</Link>
          </li>
          <li className='w-24 text-center  h-full hover:bg-slate-400 rounded-xl'>
            <Link to="/CreatePage">CreateAccout</Link>
          </li>
          <li className='w-24 text-center  h-full hover:bg-slate-400 rounded-xl'>
            <Link to="/ListPage">ListAccout</Link>
          </li>
        </ul>
      </div>


      <Routes>
        <Route path='/' element={<CreatePage />} />
        <Route path='/CreatePage' element={<CreatePage />} />
        <Route path='/ListPage' element={<ListPage />} />
        <Route path='/EditPage/:id' element={<EditPage />} />


      </Routes>


    </div>

  );
}

export default App;
