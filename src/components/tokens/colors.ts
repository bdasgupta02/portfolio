const Colors = {
    Primary: '#72B1F1',
    Secondary: {
        SuperPink: '#D668A9',
        SlateBlue: '#7881F9',
        QueenBlue: '#486C8F',
    },
    Neutral: {
        Background: '#111c26',
        LightGray: '#D3D3D3',
        AntiFlashWhite: '#F3F3F3',
        White: '#FFFFFF',
    },
}

export const percentageToHex = (percentage : number) => {
    const decimal = Math.round((percentage * 255) / 100)
    if (percentage < 7) {
        return "0" + decimal.toString(16).toUpperCase()
    } else {
        return decimal.toString(16).toUpperCase()
    }
}

export default Colors;