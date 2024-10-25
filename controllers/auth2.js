// const jwt = require('jsonwebtoken');

// // JWT verification middleware
// function authMiddleware(req, res, next) {
//     const token = req.header('Authorization')?.split(' ')[1]; // Extract token from Authorization header

//     if (!token) {
//         return res.status(401).json({ message: 'Access Denied, No Token Provided' });
//     }

//     try {
//         // Verify the token and decode it
//         const decoded = jwt.verify(token, 'your-secret-key');
//         req.user = decoded; // Set the decoded payload (user data) in req.user

//         next(); // Continue to the next middleware or route
//     } catch (err) {
//         res.status(400).json({ message: 'Invalid Token' });
//     }
// }

// // Add your auth middleware to use in routes that require authentication
//  // Apply middleware globally or on specific routes
// // Now, in your next middleware or route, req.user will be available
// module.exports=authMiddleware();

