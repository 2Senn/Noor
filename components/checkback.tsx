

export function checkBack(item: string) {
  if (item.includes("صحيح")) {
    return "#285D34"
  }
  else if ((item.includes("حسن"))) {
    return "#698E71"
  }
  else if (item.includes("جيد")) {
    return "#698E71"
  }
  else {
    return "rgba(179, 63, 64, 0.8)"
  }
}

export default checkBack
