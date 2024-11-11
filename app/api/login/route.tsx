import { SignJWT, importJWK } from 'jose';
import { cookies } from 'next/headers';

interface User {
  name: string;
  password: string;
}

export const POST = async (req: Request) => {
  try {
    const { name, password }: User = await req.json();

    if (name === process.env.NEXT_PUBLIC_NAME && password === process.env.NEXT_PUBLIC_PASSWORD) {
      const secretJWK = {
        kty: 'oct',
        k: process.env.JOSE_SECRET
      };
      const secretKey = await importJWK(secretJWK, 'HS256');
      const token = await new SignJWT({ name: process.env.NEXT_PUBLIC_NAME })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(secretKey);

      const cookieStore = await cookies();
      cookieStore.set('token', token);

      return new Response(JSON.stringify({ message: token }), { status: 200 });
    } else {
      throw new Error('Login failed');
    }
  } catch{
    return new Response(JSON.stringify({ message: 'Login failed' }), { status: 401 });
  }
};
