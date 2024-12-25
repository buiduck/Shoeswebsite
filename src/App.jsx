import Card from "./Card.jsx"
import List from "./List.jsx";
import Button from "./button.jsx"
import ProfilePicture from "./ProfilePicture.jsx";
import Todolist from "./Todolist.jsx";
import Widget from "./Widget.jsx";
import Mycomponent from "./Mycomponent.jsx";
import Counter from "./Counter.jsx";
import ColorPicker from "./ColorPicker.jsx";
import DigitalClock from "./digitalClock.jsx";
import Stopwatch from "./Stopwatch.jsx";
import FetchData from "./FetchData.jsx";
import ProductFilter from "./ProductFilter.jsx";

function App() {
  const fruits = [{id: 1 , name :"apple",calories: 95},
                 {id: 2, name : "Lemon",calories: 75},
                 {id: 3, name:"banana",calories: 85},
                 {id: 4, name:"coconut",calories: 80},
                 {id: 5, name:"pineapple",calories: 90}];

  const vegetables = [{id: 6 , name :"potato",calories: 110},
                     {id: 7, name : "celery",calories: 100},
                     {id: 8, name:"carrots",calories: 121},
                     {id: 9, name:"corn",calories: 99},
                     {id: 10, name:"brocolli",calories: 97}];
  return(
    <>
      <Card></Card>
      <Card/>
      <Card/>
      <Card/>
      <List items={fruits} category="Fruits"/>
      <List items={vegetables} category="Vegetables"/>
      <Button/>
      <ProfilePicture/>
      <Todolist/>
      <Widget/>
      <Mycomponent/>
      <Counter/>
      <ColorPicker/>
      <DigitalClock/>
      <Stopwatch/>
      <FetchData/>
      <ProductFilter/>
      </>
  );

}

export default App
