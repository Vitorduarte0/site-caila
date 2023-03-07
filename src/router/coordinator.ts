import { NavigateFunction } from "react-router-dom";

export const goToHome = (navigate: NavigateFunction ) => {
    navigate('/')
}

export const goToAbout = (navigate: NavigateFunction ) => {
    navigate('/about')
}