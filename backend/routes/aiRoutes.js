import express from 'express';
import { generateTripWithAI, validateUserSelection } from '../services/aiService.js';

const router = express.Router();

// Generate trip with AI
router.post('/generate-trip', async (req, res) => {
  try {
    const { userSelection } = req.body;
    
    if (!userSelection) {
      return res.status(400).json({
        success: false,
        message: 'User selection is required'
      });
    }

    // Validate user selection
    validateUserSelection(userSelection);
    
    // Generate trip with AI
    const tripData = await generateTripWithAI(userSelection);
    
    res.status(200).json({
      success: true,
      data: tripData
    });
  } catch (error) {
    console.error('AI generation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate trip with AI',
      error: error.message
    });
  }
});

// Health check for AI service
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'AI service is operational',
    timestamp: new Date().toISOString()
  });
});

export default router;
