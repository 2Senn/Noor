import { extendTheme } from 'native-base'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

const colors = {
  primary: {
    100: '#EBDDBE',
    150: '#E9D0C4',
    200: '#FEDBD0',
    250: "#442C2E",
    300: "#FEEAE6",
    350: "#F2EBE2",
    400: "#000",
  }
}

export default extendTheme({ config, colors })
