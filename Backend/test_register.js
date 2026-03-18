// Test the cart endpoint with a fresh token
import http from "http";

// Step 1: Register a fresh test user
function makeRequest(method, path, body, token) {
    return new Promise((resolve) => {
        const bodyStr = body ? JSON.stringify(body) : "";
        const options = {
            hostname: "localhost",
            port: 5000,
            path,
            method,
            headers: {
                "Content-Type": "application/json",
                ...(bodyStr && { "Content-Length": Buffer.byteLength(bodyStr) }),
                ...(token && { Authorization: `Bearer ${token}` }),
            },
        };
        const req = http.request(options, (res) => {
            let data = "";
            res.on("data", (chunk) => { data += chunk; });
            res.on("end", () => resolve({ status: res.statusCode, body: JSON.parse(data || "{}") }));
        });
        req.on("error", (e) => resolve({ error: e.message }));
        if (bodyStr) req.write(bodyStr);
        req.end();
    });
}

const timestamp = Date.now();
const user = { username: `carttest${timestamp}`, email: `carttest${timestamp}@test.com`, password: "pass1234" };

console.log("1. Registering test user...");
const reg = await makeRequest("POST", "/api/users/register", user);
console.log("STATUS:", reg.status, reg.body?.message || "OK");

const token = reg.body?.token;
if (!token) { console.error("No token — aborting"); process.exit(1); }

console.log("\n2. GET /api/cart (get cart)...");
const get = await makeRequest("GET", "/api/cart", null, token);
console.log("STATUS:", get.status, JSON.stringify(get.body));

console.log("\n3. POST /api/cart (add item)...");
const add = await makeRequest("POST", "/api/cart", {
    productId: "1", name: "Test Watch", price: 169.99, image: "/test.svg", quantity: 1
}, token);
console.log("STATUS:", add.status, JSON.stringify(add.body));

console.log("\n4. DELETE /api/cart/1 (remove item)...");
const remove = await makeRequest("DELETE", "/api/cart/1", null, token);
console.log("STATUS:", remove.status, JSON.stringify(remove.body));

console.log("\n5. DELETE /api/cart (clear cart)...");
const clear = await makeRequest("DELETE", "/api/cart", null, token);
console.log("STATUS:", clear.status, JSON.stringify(clear.body));
