const Joi = require("joi");
// using joi for validation
const movieSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().required(),
});

module.exports = {
  movieSchema,
};
