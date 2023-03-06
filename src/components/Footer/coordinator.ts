import { NavigateFunction } from "react-router-dom"
import { goToAbout } from "../../router/coordinator"


export const handleAbout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, navigate: NavigateFunction) => {
    e.preventDefault()
    goToAbout( navigate)
}