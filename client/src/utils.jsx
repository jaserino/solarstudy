// creating error function to be reused for errors

export function extractErrorMessage(error) {
  return error.response?.data?.message || error.message || error.toString();
}
