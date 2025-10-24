import { User } from '../models/User.js';

export class UserController {
  // Create or update user
  static async createOrUpdateUser(req, res) {
    try {
      const userData = req.body;
      
      // Validate user data
      User.validateUserData(userData);
      
      const user = await User.createOrUpdate(userData);
      
      res.status(200).json({
        success: true,
        message: 'User processed successfully',
        data: user
      });
    } catch (error) {
      console.error('Create/update user error:', error);
      res.status(400).json({
        success: false,
        message: 'Failed to process user',
        error: error.message
      });
    }
  }

  // Get user by email
  static async getUserByEmail(req, res) {
    try {
      const { email } = req.params;
      
      if (!email) {
        return res.status(400).json({
          success: false,
          message: 'Email is required'
        });
      }

      const user = await User.getByEmail(email);
      
      res.status(200).json({
        success: true,
        data: user
      });
    } catch (error) {
      console.error('Get user error:', error);
      res.status(404).json({
        success: false,
        message: 'User not found',
        error: error.message
      });
    }
  }

  // Get user statistics
  static async getUserStats(req, res) {
    try {
      const { email } = req.params;
      
      if (!email) {
        return res.status(400).json({
          success: false,
          message: 'Email is required'
        });
      }

      const user = await User.getByEmail(email);
      
      res.status(200).json({
        success: true,
        data: {
          email: user.email,
          name: user.name,
          tripCount: user.tripCount,
          createdAt: user.createdAt,
          lastLogin: user.lastLogin
        }
      });
    } catch (error) {
      console.error('Get user stats error:', error);
      res.status(404).json({
        success: false,
        message: 'User not found',
        error: error.message
      });
    }
  }
}
