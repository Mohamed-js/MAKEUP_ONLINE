import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMakeup } from './actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMakeup());
  }, []);

  const makeup = useSelector((state) => state.makeup);

  console.log(makeup[0][0]);

  return (
    <div className="App">
      <div className="items">
        {makeup[0] &&
          makeup[0].map((item) => {
            return <h5>{item.name}</h5>;
          })}
      </div>
    </div>
  );
}

export default App;
