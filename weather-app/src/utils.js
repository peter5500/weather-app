export const getTempFromKelvin = (kelvin) => {
    return kelvin - 273.15
}

export const getTempTextFromKelvin = (kelvin, fixed = 0) => {
    return <span>{getTempFromKelvin(kelvin).toFixed(fixed)}&#xb0;C</span>
}