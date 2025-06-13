import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { Session } from './auth';

// Get session from server-side cookies
export async function getServerSession(): Promise<Session | null> {
  try {
    const cookieStore = cookies();
    const token = (await cookieStore).get('auth_session')?.value;
    
    if (!token) {
      return null;
    }
    
    // Make sure the JWT_SECRET is consistent between creation and verification
    const jwtSecret = process.env.JWT_SECRET || 'Ghs7f$8z!bXxZk1@WqPl3n2R';
    
    try {
      const decoded = jwt.verify(token, jwtSecret) as any;
      
      return {
        id: decoded.sub,
        name: decoded.name,
        email: decoded.email,
        role: decoded.role
      };
    } catch (jwtError) {
      console.error('JWT verification error:', (jwtError as Error).message);
      return null;
    }
  } catch (error) {
    console.error('Error getting server session:', error);
    return null;
  }
}
