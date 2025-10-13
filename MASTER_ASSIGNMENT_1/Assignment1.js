const states = {
  India: ["Odisha", "Maharashtra", "Delhi"],
  USA: ["California", "Texas", "Florida"],
  Canada: ["Ontario", "Quebec", "Alberta"]
};

const form = document.querySelector("#registrationForm");
const countrySelect = document.querySelector("#country");
const stateSelect = document.querySelector("#state");
const phoneSection = document.querySelector("#phoneNumbers");
const addPhone = document.querySelector("#addPhone");


// ---  States selector of Given Countries ---
function selectStates(country) {
  stateSelect.innerHTML = "<option value=''>State</option>";
  if (!country || !states[country]) return;
  states[country].forEach(state => {
    const opt = document.createElement("option");
    opt.value = opt.textContent = state;
    stateSelect.appendChild(opt);
  });
}
countrySelect.addEventListener("change", evt => selectStates(evt.target.value));
selectStates(countrySelect.value);


// --- Add Phone Number Field ---
addPhone.addEventListener("click", () => {
  const phoneDiv = document.createElement("div");
  phoneDiv.className = "phone-row";
  phoneDiv.innerHTML = `
    <input type="text" class="phoneNumber" placeholder="Enter  10-digit Phone Number." maxlength="10" pattern="\\d*" required>
    <button type="button" onclick="removePhoneField(this)" class="delete-button">-</button>
  `;
  phoneSection.appendChild(phoneDiv);
});
window.removePhoneField = function (btn) {
  btn.parentElement.remove();
};


// --- Reset Button ---
document.querySelector("#resetButton").addEventListener("click", () => {
  form.reset();
  document.querySelectorAll(".error").forEach(evt => evt.textContent = "");
});


// --- Save Button ---
document.querySelector("#saveButton").addEventListener("click", evt => {
  evt.preventDefault();
  saveData();
});

// Saving Data
function saveData() {
  let valid = true;
  document.querySelectorAll(".error").forEach(evt => evt.textContent = "");

  // -- Full Name --
  const fullName = document.querySelector("#fullName").value.trim();
  const namePattern = /^[A-Za-z ]{3,64}$/;

  if (!namePattern.test(fullName)) {
    document.querySelector("#errorFullName").textContent = "* Enter Full Name Of 3-64 Characters.";
    valid = false;
  }

  // -- Email Address --
  const email = document.querySelector("#email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.querySelector("#errorEmail").textContent = "* Enter a Valid Email.";
    valid = false;
  }

  // -- Date Of Birth --
  const dob = document.querySelector("#dob").value;
  if (dob && new Date(dob) > new Date()) {
    document.querySelector("#errorDob").textContent = "* Date Of Birth can not be in the Future. "
    valid = false;
  }
  // -- Country & State --
  const country = document.querySelector("#country").value;
  const state = document.querySelector("#state").value;

  // --Address --
  const address = document.querySelector("#address").value.trim();
  if (address === "") {
    document.querySelector("#errorAddress").textContent = "* Enter a Valid Address.";
    valid = false;
  }

  // -- Phone Numbers --
  const phones = [...document.querySelectorAll(".phoneNumber")]
    .map(phone => phone.value.trim())
    .filter(Boolean);

  if (phones.length < 1 || phones.some(p => !/^[0-9]{10}$/.test(p))) {
    document.querySelector("#errorPhone").textContent = "* Enter a Valid 10-digit Phone Numbers.";
    valid = false;
  }

  // -- Zip Code --
  const zip = document.querySelector("#zip").value.trim();
  if (!/^[0-9]{6}$/.test(zip)) {
    document.querySelector("#errorZip").textContent = "* Enter a Valid 6-digit ZIP.";
    valid = false;
  }

  if (!valid) return;

  // -- User Table Data --
  const user = {
    fullName,
    email,
    dob,
    phones,
    address: `${address}, ${state}, ${country}, ${zip}`
  };


  const users = JSON.parse(localStorage.getItem("users") || "[]");
  users.unshift(user);

  localStorage.setItem("users", JSON.stringify(users));

  renderTable();
  form.reset();

}


// -- Render Table from Local Storage --
function renderTable() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const tbody = document.querySelector("#userTable tbody");
  tbody.innerHTML = "";

  users.forEach(user => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.fullName}</td>
      <td>${user.email}</td>
      <td>${user.dob || ""}</td>
      <td>${user.phones.join(", ")}</td>
      <td>${user.address}</td>`;
    tbody.appendChild(row);
  });
}


// -- Load Table on Page Load --
window.onload = renderTable;
