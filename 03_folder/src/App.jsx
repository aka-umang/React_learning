import Card from "./components/card";

function App() {
  return (
    <div>
      <div className="parent">
        <Card user='Umang Maheshwari' age={20} />
        <Card user='John Doe' age={25} />
        <Card user='Jane Smith' age={30} />
      </div>
    </div>
  );
}

export default App;