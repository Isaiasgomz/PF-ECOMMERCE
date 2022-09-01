module.exports = {
validateAnswer: function (input) {
    const errors = {}
    if (!input.answer) {
      errors.answer = 'Debes escribir una respuesta'
    }

    return errors;

  }
}