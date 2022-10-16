import CarList from "./CarList"

function CarContainer({cars, formData, onFormData, setEditKey}){

    return (<div>
        <CarList cars={cars} formData={formData} onFormData={onFormData} setEditKey={setEditKey}/>
        </div>)
}

export default CarContainer;