const App = () => {
    return (
      <div>
        <nav></nav>
      </div>
    )
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )


  function AjustarQuantidade(){
    return b = b + 1
  }

  function AjustarPreço() {
    return c = c + 59.99; 
  }

  function Ajuste(){
    AjustarPreço();
    AjustarQuantidade()
  }

  let c = 59.99
  let b = 1

  Ajuste2()

  console.log (c, b)

