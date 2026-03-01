
/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

// signs and creates a JWT
const createToken = (payload: JwtPayload, secret: string, { expiresIn }: SignOptions) => {
    // jwt.sign() is a function from the jsonwebtoken library. It creates a JWT (JSON Web Token).
    const token = jwt.sign(payload, secret, { expiresIn });
    return token;
}

const verifyToken = (token: string, secret: string) => {
    try {
        const decoded = jwt.verify(token, secret) as JwtPayload;
        return {
            success: true,
            data: decoded
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.message,
            error
        }
    }
}

const decodeToken = (token: string) => {
    const decoded = jwt.decode(token) as JwtPayload;
    return decoded;
}


export const jwtUtils = {
    createToken,
    verifyToken,
    decodeToken,
}