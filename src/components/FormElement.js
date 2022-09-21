import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFormElement } from '../redux/actions'
import Card from './Card'

const FormElement = ({element, index, createQuestion}) => {
  const dispatch = useDispatch()
  const [question, setQuestion] = useState(`Question ${index + 1}`)
  const [placeholder, setPlaceholder] = useState('')
  const [isRequired, setIsRequired] = useState(false)

  const renderFormElement = () => {
    switch(element.type) {
      case "text":
        return ( <input type="text" readOnly className="form-control" placeholder={placeholder} /> )
      
      default: return
    }
  }

  return (
    <Card className="mb-3 position-relative">
        <button className="position-absolute top-0 end-0 btn text-danger" onClick={() => dispatch(removeFormElement(element.id))}>
          <i className="bi bi-trash3-fill"></i>
        </button>
        <h5>What would you like to ask?</h5>
        <input className="question-input my-3" type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        { renderFormElement() }
        <div className="d-flex justify-content-end mt-3 align-items-center">
          <button className="btn mr-2" onClick={() => createQuestion(element.type)}>
            <i className="bi bi-window-plus"></i>&nbsp;&nbsp;Duplicate
          </button>
          <div className="form-check form-switch">
            <label className="form-check-label" htmlFor="flexSwitchCheckReverse" role="button">Required</label>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" checked={isRequired} onChange={() => setIsRequired(!isRequired)} />
          </div>
        </div>
    </Card>
  )
}

export default FormElement