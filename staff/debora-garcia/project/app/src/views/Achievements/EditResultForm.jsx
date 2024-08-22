import React from 'react';
import logic from '../../logic';
import Button from '../../components/Button';
import Field from '../../components/Field';

export default function EditResultForm({ resultId, onResultEdited }) {
    console.log("EditResultForm -> render")

    const handleCreatePostSubmit = (event) => {
        event.preventDefault()
        const form = event.target


        const time = form.time.value 
        const repetitions = form.repetitions.value
        const weight = form.weight.value

        try {

            logic.updateResult(resultId, time, repetitions, weight)
                .then(() => onResultEdited())
                .catch(error => {
                    console.error(error)
                })
        } catch (error) {
            console.error(error)

        }
        return (
            <form className="EditResultForm" onSubmit={handleCreatePostSubmit}>
                <Field id="time" type="number" placeholder="Time"></Field>
                <Field id="repetitions" type="number" placeholder="Total repetitions"></Field>
                <Field id="weight" type="number" placeholder="Weight"></Field>

                <div className="form-buttons-container">
                    <Button type="submit">Save</Button>
                </div>


            </form>
        );
    }

}
