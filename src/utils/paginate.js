
  // export const paginate = (products) => {
  //   const itemsPerPage = 10
  //   const numberOfPages = Math.ceil(products.length / itemsPerPage)
  
  //   const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
  //     const start = index * itemsPerPage
  //     return products.slice(start, start + itemsPerPage)
  //   })
  
  //   return newFollowers
  // }

  export const paginate = (products) => {
    const itemsPerPage = 10
    const numberOfPages = Math.ceil(products.length / itemsPerPage)

    const newList = Array.from({length: numberOfPages}, (_, i) => {
      const start = i * itemsPerPage
      return products.slice(start, start + itemsPerPage)
    })
    return newList
  }