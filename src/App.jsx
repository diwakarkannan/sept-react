// import Child from './child';
import React from "react";
import Greetings from './components/greetings';

function App() {
  return (
    <>
      <Greetings firstName={"prabhu"} lastName={"Kannan"} age={25}
          car={{name: "Tata", model: "Nexon"}} array={[5,1,8,3]} 
          doSomething={function () {
            console.log("BBLABAEALZKELAZKE");
          }}
       >
        <img src="https://picsum.photos/200/300" />
      </Greetings>
      <p>hello</p>
      <p>world</p> 
     
    </>

  )
  // (
    // <div className="App">
    //   <Child firstName={"Diwakar"} lastName={"Kannan"} age={25}
    //     car={{name: "Tata", Model: "Nexon"}} array={[5,1,8,3]} 
    //     doSomething={function () {
    //       console.log("BBLABAEALZKELAZKE");
    //     }}
    //     img = {<img src="https://picsum.photos/200/300" />}/>
    // </div>

    
  // );
}

export default App;
