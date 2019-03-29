export const generateHash = () => {
  return Math.random()
    .toString(36)
    .substr(1, 9)
}
