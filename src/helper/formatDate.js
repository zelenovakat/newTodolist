export function formatDate(date) {
  const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" }

  return date.toLocaleDateString("en-US", options)
}
