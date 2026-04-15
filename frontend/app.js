async function getValue() {
  const res = await fetch("http://localhost:3000/value");
  const data = await res.json();
  document.getElementById("value").innerText = "Value: " + data.value;
}

async function updateValue() {
  const amount = document.getElementById("amount").value;

  await fetch("http://localhost:3000/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: Number(amount) })
  });

  getValue();
}

getValue();
