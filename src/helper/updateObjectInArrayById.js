export function updateObjectInArrayById(array, selectedItem) {
  return array.map((item) => {
    if (item.id !== selectedItem.id) {
      return item
    }
    return {
      ...item,
      ...selectedItem,
    }
  })
}
