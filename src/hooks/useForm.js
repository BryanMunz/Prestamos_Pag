import { useState } from 'react'
import { useAuth } from '@/hooks/auth'

export const useForm = (initialForm = {}, submit) => {
    const [form, setForm] = useState(initialForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value,
        })
    }

    const onFileChange = ({ target }) => {
        
        const { name, files } = target;
        setForm({
            ...form,
            [name]: files[0],
        });
    }

    const onSubmitForm = (event) => {
        event.preventDefault()

        submit({
            ...form
        });
    } 

    return {
        ...form,
        form,
        onInputChange,
        onSubmitForm,
        onFileChange
    }
}
