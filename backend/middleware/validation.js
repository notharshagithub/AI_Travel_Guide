import Joi from 'joi';

// Trip validation schema
const tripSchema = Joi.object({
  userSelection: Joi.object({
    location: Joi.string().required(),
    noOfDays: Joi.number().integer().min(1).max(30).required(),
    budget: Joi.string().valid('Cheap', 'Moderate', 'Expensive').required(),
    travels: Joi.string().valid('Solo', 'Couple', 'Family', 'Friends').required()
  }).required(),
  userEmail: Joi.string().email().required()
});

// User validation schema
const userSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().min(2).max(100).required(),
  picture: Joi.string().uri().optional(),
  provider: Joi.string().default('google')
});

// Validate trip data
export const validateTripData = (req, res, next) => {
  const { error, value } = tripSchema.validate(req.body);
  
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      details: error.details.map(detail => detail.message)
    });
  }
  
  req.body = value;
  next();
};

// Validate user data
export const validateUserData = (req, res, next) => {
  const { error, value } = userSchema.validate(req.body);
  
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      details: error.details.map(detail => detail.message)
    });
  }
  
  req.body = value;
  next();
};

// Validate trip ID parameter
export const validateTripId = (req, res, next) => {
  const { tripId } = req.params;
  
  if (!tripId || tripId.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'Trip ID is required'
    });
  }
  
  next();
};

// Validate email parameter
export const validateEmail = (req, res, next) => {
  const { email } = req.params;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Valid email is required'
    });
  }
  
  next();
};
