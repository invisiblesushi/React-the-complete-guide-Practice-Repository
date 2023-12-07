import Input from "./Input.jsx";
import {useRef} from "react";
import Modal from "./Modal.jsx";

export default function NewProject({onAdd, onCancel}){
    const modal = useRef();
    
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    
    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        
        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            modal.current.open();
            return;
        }
        
        // Validation
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }
    
    return (
    <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
            <div className="text-stone-600 mb-4">
                <p>Oops ... looks like you forgot to enter a value.</p>
                <p>Please make sure you provided a valid value for every input field.</p>
            </div>

        </Modal>
        
        <div className="w-[35rem] mt-16 ">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button 
                        className="px-6 text-stone-800 hover:text-stone-950"
                        onClick={onCancel}>
                        Cancel
                    </button>
                    <button 
                        className="px-6 py-1 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}>
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title"></Input>
                <Input ref={description} label="Description" textArea></Input>
                <Input type="date" ref={dueDate} label="Due Date"></Input>
            </div>
        </div>
    </>
    )}