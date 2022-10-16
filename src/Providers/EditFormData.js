import { createContext, useState } from "react";

const EditDataContext = createContext();

function EditDataProvider({children}){
    
    const[editKey, setEditKey] = useState(0)
    const [formData, setFormData] = useState({
        'make' : '',
        'model': '',
        'year': '',
        'price': '',
        'front': '',
        'side': '',
        'back': '',
    
    })

    const value = [formData, setFormData, editKey, setEditKey]
    return(
        <EditDataContext.Provider value={value}>
            {children}
        </EditDataContext.Provider>
    )
}

export {EditDataContext, EditDataProvider}