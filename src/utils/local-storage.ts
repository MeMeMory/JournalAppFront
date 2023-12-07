export const getStoreLocal = (name: string) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const ls = localStorage.getItem(name)
    return ls ? JSON.parse(ls) : null
  }
  return null
}
