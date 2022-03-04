/// <reference types="cypress" />

class RegEx {
  countWordRegEx(text, word) {
    let regEx = new RegExp(word, 'g')
    let count = (text.match(regEx) || []).length
    return count
  }

  findWordRegEx(text, word) {
    let regEx = new RegExp(word, 'g')
    let count = text.match(regEx) || []
    return count
  }

  getSiteBody(page) {
    return new Promise((resolve) => {
      cy.request({
        url: page,
        method: 'GET',
      }).then((data) => {
          resolve(data.body);
      })
    })
  }
}

export default new RegEx()
