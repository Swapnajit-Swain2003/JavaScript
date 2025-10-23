// --- States Of Given Countries ---
const states = {
  India: ["Odisha", "Maharashtra", "Delhi"],
  USA: ["California", "Texas", "Florida"],
  Canada: ["Ontario", "Quebec", "Alberta"]
};
// --- DOM Reference ---
const form = document.querySelector("#registrationForm");
const countrySelect = document.querySelector("#country");
const stateSelect = document.querySelector("#state");
const phoneSection = document.querySelector("#phoneNumbers");
let editingIndex = null;

// ---  State Selector Of Given Countries ---
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

// --- Phone Field  ---
function createPhoneField(value = "") {
  const phoneDiv = document.createElement("div");
  phoneDiv.className = "phone-field";
  phoneDiv.innerHTML = `
    <input type="text" class="phoneNumber" value="${value}" placeholder="Enter 10 digit Phone Number." maxlength="10">
    <button type="button" class="removePhone">-</button>
  `;
  return phoneDiv;
}

// --- Add New Phone Fields ---
phoneSection.addEventListener("click", (evt) => {
  if (evt.target.id === "addPhone") {
    phoneSection.appendChild(createPhoneField());
  }
  // --- Remove Phone Fields ---
  if (evt.target.classList.contains("removePhone")) {
    evt.target.parentElement.remove();
  }
});

// --- Reset Phone Fields ---
function resetPhoneFields() {
  phoneSection.innerHTML = `
    <div class="phone-field">
      <input type="text" class="phoneNumber" placeholder="Enter 10 digit Phone Number." maxlength="10">
      <button type="button" id="addPhone">+</button>
    </div>
  `;
}
resetPhoneFields();

// --- Reset Button ---
document.querySelector("#resetButton").addEventListener("click", () => {
  form.reset();
  editingIndex = null;
  document.querySelectorAll(".error").forEach(evt => evt.textContent = "");
  selectStates("");
  resetPhoneFields();
});

// --- Submit Button ---
form.addEventListener("submit", evt => {
  evt.preventDefault();
  saveData();
});

// --- Data Saving ---
function saveData() {
  let valid = true;
  document.querySelectorAll(".error").forEach(evt => evt.textContent = "");

  // --- Full Name ---
  const fullName = document.querySelector("#fullName").value.trim();
  const namePattern = /^[A-Za-z0-9\- ]{3,64}$/;
  if (!namePattern.test(fullName)) {
    document.querySelector("#errorFullName").textContent = "* Enter Full Name Of 3 - 64 Characters.";
    valid = false;
  }

  // --- Email ---
  const email = document.querySelector("#email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.querySelector("#errorEmail").textContent = "* Enter a Valid Email.";
    valid = false;
  }

  // --- Date Of Birth ---
  const dob = document.querySelector("#dob").value;
  if (dob && new Date(dob) > new Date()) {
    document.querySelector("#errorDob").textContent = "* Date Of Birth cannot be in the Future.";
    valid = false;
  }

  // --- Address ---
  const address = document.querySelector("#address").value.trim();
  if (!address) {
    document.querySelector("#errorAddress").textContent = "* Enter a Valid Address.";
    valid = false;
  }

  // --- Country & State ---
  const country = countrySelect.value;
  const state = stateSelect.value;
  // --- Zip ---
  const zip = document.querySelector("#zip").value.trim();
  if (!/^[0-9]{6}$/.test(zip)) {
    document.querySelector("#errorZip").textContent = "* Enter a Valid 6-digit ZIP.";
    valid = false;
  }

  // --- Phone NUmbers ---
  const phones = [...document.querySelectorAll(".phoneNumber")]
    .map(p => p.value.trim())
    .filter(Boolean);

  if (phones.length < 1 || phones.some(p => !/^[0-9]{10}$/.test(p))) {
    document.querySelector("#errorPhone").textContent = "* Enter Valid 10-digit Phone Numbers.";
    valid = false;
  }

  if (!valid) return;
// --- User Data ---
  const user = {
    fullName,
    email,
    dob,
    phones,
    address: `${address}, ${state}, ${country}, ${zip}`
  };

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  if (editingIndex !== null) {
    users[editingIndex] = user;
    toastr.success("User updated successfully");
  } else {
    users.unshift(user);
    toastr.success("User added successfully");
  }

  localStorage.setItem("users", JSON.stringify(users));
  renderTable();
  form.reset();
  editingIndex = null;
  selectStates("");
  resetPhoneFields();
}

// --- Render table ---
function renderTable() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const tbody = document.querySelector("#userTable tbody");
  tbody.innerHTML = "";

  users.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="checkbox" class="selectUser" data-index="${index}"></td>
      <td>${user.fullName}</td>
      <td>${user.email}</td>
      <td>${user.dob || ""}</td>
      <td>${user.phones.join(", ")}</td>
      <td>${user.address}</td>
      <td>
        <button class="edit-btn" data-index="${index}">EDIT</button>
        <button class="delete-btn" data-index="${index}">DELETE</button>
      </td>`;
    tbody.appendChild(row);
  });

  attachRowEvents();
}


function attachRowEvents() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
//  --- Delete Button ---
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.onclick = () => {
      const index = +btn.dataset.index;
      users.splice(index, 1);
      localStorage.setItem("users", JSON.stringify(users));
      renderTable();
      toastr.success("User deleted successfully");
    };
  });
// --- Edit Button  ---
  document.querySelectorAll(".edit-btn").forEach(btn => {
    btn.onclick = () => {
      const index = +btn.dataset.index;
      const u = users[index];
      editingIndex = index;

      document.querySelector("#fullName").value = u.fullName;
      document.querySelector("#email").value = u.email;
      document.querySelector("#dob").value = u.dob;
      document.querySelector("#address").value = u.address.split(",")[0];
      const country = u.address.split(",")[2].trim();
      const state = u.address.split(",")[1].trim();
      const zip = u.address.split(",")[3].trim();

      countrySelect.value = country;
      selectStates(country);
      stateSelect.value = state;
      document.querySelector("#zip").value = zip;

      phoneSection.innerHTML = "";
      u.phones.forEach(p => phoneSection.appendChild(createPhoneField(p)));
      const addBtn = document.createElement("button");
      addBtn.type = "button";
      addBtn.id = "addPhone";
      addBtn.textContent = "+";
      phoneSection.appendChild(addBtn);
    };
  });
}

// --- Delete Selected User(s) ---
document.querySelector("#deleteSelected").addEventListener("click", () => {
  const selected = [...document.querySelectorAll(".selectUser:checked")];
  if (selected.length === 0) {
    toastr.warning("No user selected");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const indices = selected.map(cb => +cb.dataset.index).sort((a, b) => b - a);
  indices.forEach(i => users.splice(i, 1));

  localStorage.setItem("users", JSON.stringify(users));
  renderTable();
  toastr.success("Selected users deleted successfully");
});

// --- Load table ---
window.onload = renderTable;
