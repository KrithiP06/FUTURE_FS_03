document.getElementById("contactForm").addEventListener("submit", async (e) => {
e.preventDefault();

const data = {
name: e.target[0].value,
email: e.target[1].value,
message: e.target[2].value
};

try {
const res = await fetch("http://127.0.0.1:5000/contact", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(data)
});

```
if (res.ok) {
  alert("Message sent successfully!");
} else {
  alert("Something went wrong");
}
```

} catch (err) {
alert("Server not running");
}
});
