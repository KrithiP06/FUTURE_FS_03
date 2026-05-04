document.getElementById("contactForm").addEventListener("submit", async (e) => {
e.preventDefault();

const data = {
name: e.target[0].value,
email: e.target[1].value,
message: e.target[2].value
};

try {
await fetch("http://localhost:5000/contact", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(data)
});

```
alert("Message sent!");
```

} catch (err) {
alert("Server not running");
}
});
