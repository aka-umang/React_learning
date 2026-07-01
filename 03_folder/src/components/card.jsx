function Card(props){ //as obj hota
  console.log(props.user,props.age); //props.user and props.age are used to access the values passed as props to the Card component.
  return (
    <div className="card">
          <img src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y293fGVufDB8fDB8fHww"></img>
          <h1>{props.user}</h1>
          <h2>{props.age} years old</h2>
          <p>lorem ipsum dolor sit amet</p>
          <button>View Profile</button>
    </div>
  );
}

export default Card;