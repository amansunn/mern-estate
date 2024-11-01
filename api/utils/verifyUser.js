<<<<<<< HEAD
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) =>{
    const token = req.cookies.access_token;
    if(!token)
        return next(errorHandler(401, "Unauthorised"));
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) return next(errorHandler(403, "Forbidden"));
            req.user = user;
            next();
        });
=======
export const verifyToken = (req, res, next) =>{
    
>>>>>>> 4708a4b7c8368210dba10152f4c50325fc2915c2
}