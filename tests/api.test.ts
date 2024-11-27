import request from 'supertest';
const Customer_API = "http://localhost:3000/api/routes"
const Login_API = "/api/login"
describe("API Tests" , () =>{
    it("should return a 200 status and customer data" , async ()=>{
        const res = await request(Customer_API).get("/").redirects(10);
        expect(res.statusCode).toBe(200);
        expect(res.body.customer).toBeDefined();
    })
    it("should return 401 when try to login wrong name" , async ()=>{
        const res = await request("http://localhost:3000")
        .post(Login_API)
        .send({name:`{ "$ne": null }` , password:"123"})
        .set('Accept', 'application/json')
        .redirects(10);
        expect(res.status).toBe(401);  
    })
    it("should return 401 when try to login wrong password" , async ()=>{
        const res = await request("http://localhost:3000")
        .post(Login_API)
        .send({name:`validUser` , password:`{ "$ne": null }`})
        .set('Accept', 'application/json')
        .redirects(10);
        expect(res.status).toBe(401);  
    })
    it("should return 401 when try to login wrong name" , async ()=>{
        const res = await request("http://localhost:3000")
        .post(Login_API)
        .send({name:`{ "$or": [ {}, { "admin": true } ] }` , password:`123`})
        .set('Accept', 'application/json')
        .redirects(10);
        expect(res.status).toBe(401);  
    })
})