module.exports = {
  prom: function (rating) {
    let i = 0
    let summ = 0;
    while (i < rating.length) {
      summ = summ + rating[i++];
    }
    return Math.round(summ / rating.length);
  },

  validate: function (input) {
    const errors = {}

    if (!input.qualification) {
      errors.qualification = 'La valoracion es requerida'
    }
    if (input.review?.split(' ').length < 5) {
      errors.review = 'Debes dejar al menos un texto con 5 palabras'
    }


    return errors;

  },
  validateQuest: function (input) {
    const errors = {}
    if (!input.question) {
      errors.question = 'Debes dejar una pregunta'
    }

    return errors;

  }

}