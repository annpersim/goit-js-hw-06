const form = document.querySelector(".login-form");
const user = {};
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be field!");
  } else {
    user[email.name] = email.value;
    user[password.name] = password.value;

    console.log(user);
  }

  event.currentTarget.reset();
}
