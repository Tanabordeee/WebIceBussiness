import { SignJWT, importJWK } from 'jose';
import { cookies } from 'next/headers';
export const POST = async (req: Request) => {
  try {
    const form = await req.formData();
    const token = form.get("cf-turnstile-response")?.toString();
    const name = form.get("name")?.toString();
    const password = form.get("password")?.toString();
    const ip = req.headers.get("x-forwarded-for") || "";

    const formData = new FormData();
    formData.append("secret", process.env.SecretCloudFlareKey || '');
    formData.append("response", token || '');
    formData.append("remoteip", ip);  

    const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const result = await fetch(url, {
      body: formData,
      method: "POST",
    });
    const verifyData = await result.json();

    if (!verifyData.success) {
      return new Response(JSON.stringify({ message: 'Invalid CAPTCHA' }), { status: 403 });
    }
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
  } catch(error){
    return new Response(JSON.stringify({ message: 'Login failed',err : error }), { status: 401 });
  }
};
