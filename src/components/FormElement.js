import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { v4 as uuidv4 } from 'uuid';

import { removeFormElement } from '../redux/actions'
import Card from './Card'

const FormElement = ({element, index, createQuestion}) => {
  const dispatch = useDispatch()
  const [question, setQuestion] = useState(`Question ${index + 1}`)
  const [isRequired, setIsRequired] = useState(false)
  const [dropDownList, setDropDownList] = useState([
    {id: uuidv4(), name: 'item1'},
    {id: uuidv4(), name: 'item2'},
    {id: uuidv4(), name: 'item3'},
  ])

  const removeDropdownItem = (id) => {
    const newList = dropDownList.filter(list => (list.id !== id))
    setDropDownList(newList)
  }

  const updateDropdownItem = (id, value) => {
    const newList = []
    dropDownList.forEach(list => list.id === id ? newList.push({id, name: value}) : newList.push(list))
    setDropDownList(newList)
  }

  const renderFormElement = () => {
    switch(element.type) {
      case "text":
        return ( <input type="text" readOnly className="form-control" /> )
      case "dropdown":
        return (
          <>
            {dropDownList.map(dropDown => (
              <div key={dropDown.id} className="d-flex align-items-end mb-3">
                  <i type="button" className="bi bi-dash-circle" onClick={() => removeDropdownItem(dropDown.id)} />
                  <input className="question-input ml-i-1" type="text" value={dropDown.name} onChange={(e) => updateDropdownItem(dropDown.id, e.target.value)} />
              </div>
            ))}
            <div className="d-inline-flex">
              <button className="btn btn-secondary"><i className="bi bi-plus-circle"></i> Add Item</button>
            </div>
          </>
        )
        
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