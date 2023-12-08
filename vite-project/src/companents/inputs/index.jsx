import './index.css'

function Stitleinput() {  
    return (
        <>
          <label htmlFor="title"><p id='Sarlavha'>Sarlavha</p></label>
          <input placeholder='Sarlavha' type="text" id="title" />
        </>
    )
}

function Stitleinput2() {  
    return (
        <>
          <label htmlFor="Soha"><p id='Soha1'>Soha</p></label>
          <input placeholder='Soha' type="text" id="Soha" />

          <label htmlFor="Soha"><p id='Soha1'>Ko'nikmalar</p></label>
          <input placeholder='Konikmalar' type="text" id="Soha" />
        </>
    )
}

function Stitleinput3() {  
  return (
      <>
        <label htmlFor="Soha2"><p id='Soha3'>Izoh *</p></label>
        <input placeholder='Vakansiya uchun izoh qoldiring' type="text" id="Soha2" />
      </>
  )
}

export{Stitleinput,Stitleinput2,Stitleinput3}