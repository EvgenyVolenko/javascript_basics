import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greating';
import CurrentTime from './components/CurrentTime';
import EventCard from './components/EventCard';

const firstEvent = {
  title: 'Первое событие',
  dateEvent: '21-05-2024',
  address: 'Первый адрес!',
  style: 'firstClass'
};

const secondEvent = {
  title: 'Второе событие',
  dateEvent: '06-06-2024',
  address: 'Второй адрес!',
  style: 'secondClass'
};

const thirdEvent = {
  title: 'Третье событие',
  dateEvent: '01-01-2025',
  address: 'Третий адрес!',
  style: 'thirdClass'
};

function App() {
  return (
    <div className="App">
      <Greeting />
      <CurrentTime />
      <EventCard event={firstEvent} />
      <EventCard event={secondEvent} />
      <EventCard event={thirdEvent} />
    </div>
  );
}

export default App;
