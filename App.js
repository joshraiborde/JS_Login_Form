// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


function animatedForm(){
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      // chekc for validations
      if(input.type  === "text" && validateUser(input))
      nextSlide(parent, nextForm);
    })
  })
}

function validateUser(user){
  if(user.value.length < 6){
    console.log('notenoughcharacters')
    error('rgb(189, 87, 87');
  } else {
    error('rgb(87, 189, 130');
    return true;
  }
}

function nextSlide(parent, nextForm) {
  parent.classList.add('innactive');
  parent.classList.remove('active');
  nextForm.classList.add('active');
}

function error(color){
  document.body.style.backgroundColor = color;
}

animatedForm();