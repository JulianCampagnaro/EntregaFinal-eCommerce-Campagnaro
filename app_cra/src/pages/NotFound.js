import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const NotFound = () => {

    const redirect = useNavigate()

    useEffect(() => {
        setTimeout(() => {
        redirect('/')
        }, 3000)
    })

    return (
        <div>NotFound. Redirecting....</div>
    )
}

export default NotFound