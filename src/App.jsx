import './App.css'

function App() {
  

  function dothis()
  {
    window.alert("Hello");
  }
  return (
    <>
    <h1>Hii there,I am an Engineer.</h1>
    <button onClick={dothis}>Click me!</button>
    <h1 style={{color:"blue"}}>This is the added code.</h1>
      </>
  )
}

export default App
