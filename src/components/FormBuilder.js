import { useState } from "react"

import { useDispatch, useSelector } from "react-redux";

import { addFormElement } from "../redux/actions";
import { generateFormType } from "../utils";
import Card from "./Card"
import FormElement from "./FormElement"

const FormBuilder = () => {
    const formElements = useSelector(state => state.formElements)
    const dispatch = useDispatch()


    const [title, setTitle] = useState('Form Title')
    const [description, setDescription] = useState('Form Description')   
    const [showQuestionType, setShowQuestionType] = useState(false)

    const createQuestion = (type) => {
        setShowQuestionType(false)
        const newQuestion = generateFormType(type)
        dispatch(addFormElement(newQuestion))
    }
 
    return (
        <div className="container">
            <Card className="mt-3 mb-3">
                <div className="mb-3">
                    <label htmlFor="fromTitle" className="form-label">Form Title</label>
                    <input type="text" className="form-control" id="fromTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="formDescription" className="form-label">Form Description</label>
                    <input type="text" className="form-control" id="formDescription" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
            </Card>

            {formElements?.map((formElement, index) => (
                <FormElement
                    key={formElement.id}
                    element={formElement}
                    index={index}
                    createQuestion={createQuestion}
                />
            ))}

            {showQuestionType && 
                <Card className="mt-3 position-relative">
                    <button className="position-absolute top-0 end-0 btn" onClick={() => setShowQuestionType(false)}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                    <h5>Select question type</h5>
                    <div className="row">
                        <div className="col-12 col-md-6 my-1 d-grid">
                            <button className="card p-2" onClick={() => createQuestion("text")}>
                                <h6>Text question</h6>
                            </button>
                        </div>
                        <div className="col-12 col-md-6 my-1 d-grid">
                            <button className="card p-2" onClick={() => createQuestion("dropdown")}>
                                <h6>Dropdown</h6>
                            </button>
                        </div>
                        <div className="col-12 col-md-6 my-1 d-grid">
                            <button className="card p-2" onClick={() => createQuestion("rating")}>
                                <h6>Ratings</h6>
                            </button>
                        </div>
                        <div className="col-12 col-md-6 my-1 d-grid">
                            <button className="card p-2" onClick={() => createQuestion("boolean")}>
                                <h6>Boolean, Yes/No, True/False</h6>
                            </button>
                        </div>
                    </div>
                </Card>
            }

            <div className="d-flex justify-content-center my-3">
                <button className="btn btn-secondary" onClick={() => setShowQuestionType(true)}>+ Add Question</button>
            </div>
        </div>
    )
}

export default FormBuilder