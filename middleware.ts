import { jwtVerify, importJWK } from "jose";
import { NextResponse } from "next/server";

export async function middleware(req: any) {
  if (req.method === "POST") {
    try {
      let token = req.cookies.get("token");
      

      if (!token) {
        return new NextResponse("Token is missing", { status: 401 });
      }


      const secretJWK = {
        kty: 'oct',  
        k: process.env.JOSE_SECRET as string
      };
      const secretKey = await importJWK(secretJWK, 'HS256');


      const { payload } = await jwtVerify(token.value, secretKey);


      const requestHeaders = new Headers(req.headers);
      requestHeaders.set('user', JSON.stringify({ name: payload.name }));


      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error: any) {

      return new NextResponse("Error: Invalid token", { status: 403 });
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: '/api/routes',
};
