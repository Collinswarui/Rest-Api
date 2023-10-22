import { useState } from "react"
import { UseSelector, useDispatch } from "react-redux"



function Goalform() {
  const {text, setText } = useState('')

  
  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="group">
                <label htmlFor="text">Goal</label>
                <input type="text"/>
            </div>
        </form>
    </section>
  )
}

export default Goalform
