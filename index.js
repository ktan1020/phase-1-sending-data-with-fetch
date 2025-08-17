// Add your code here
function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
        })
    .then((response) => response.json()) // convert the Response body into JSON
    .then((data) => {
      // `data` now includes { name, email, id }
      const idElement = document.createElement("p");
      idElement.textContent = `New ID: ${data.id}`;
      document.body.appendChild(idElement);
      return data;
    })
    .catch((error) => {
      const errorElement = document.createElement("p");
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}