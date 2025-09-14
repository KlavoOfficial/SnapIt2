import User from '../models/User.js';

export const seedUsers = async () => {
  try {
    // Check for admin user
    const adminExists = await User.findOne({ email: 'admin@snapit.com' });
    if (!adminExists) {
      await User.create({
        name: 'Admin User',
        email: 'admin@snapit.com',
        password: 'password',
        phone: '1234567890',
        role: 'admin'
      });
      console.log('Admin user seeded.');
    } else {
      console.log('Admin user already exists.');
    }

    // Check for regular user
    const userExists = await User.findOne({ email: 'user@snapit.com' });
    if (!userExists) {
      await User.create({
        name: 'Demo User',
        email: 'user@snapit.com',
        password: 'password',
        phone: '0987654321'
      });
      console.log('Demo user seeded.');
    } else {
      console.log('Demo user already exists.');
    }

  } catch (error) {
    console.error('Error seeding users:', error.message);
  }
};
