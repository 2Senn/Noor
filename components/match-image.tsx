import checkBack from "./checkback"


export function forImage(item: string) {
  if (checkBack(item) == "#698E71") {
    return require("../src/images/approve.png")
  }
  if (checkBack(item) == "#285D34") {
    return require("../src/images/approve.png")
  }
  else {
    return require("../src/images/rejected.png")
  }
}

export default forImage

