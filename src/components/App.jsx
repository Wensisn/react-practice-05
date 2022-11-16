import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, getClicksValue } from '../redux/clicksSlice';

export const App = () => {
  const numberOfClicks = useSelector(getClicksValue);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <button type="button" onClick={() => dispatch(increment(5))}>
        Numver of clicks : increment
      </button>
      <button type="button" onClick={() => dispatch(decrement(10))}>
        Numver of clicks : decrement
      </button>
      <button type="button">Numver of clicks : {numberOfClicks}</button>
    </div>
  );
};
