export const base64Encode = val => btoa(val)

export const base64Decode = val => atob(val)

export const formulaCombination = (val, action, amount) => {
  if (val && action) {
    const amountFormula = amount || 8
    let combination = val
    for (let i = 1; i < amountFormula; i++) {
      if (action === 'encode') {
        combination = base64Encode(combination)
      } else {
        combination = base64Decode(combination)
      }
    }

    return combination
  }
}
