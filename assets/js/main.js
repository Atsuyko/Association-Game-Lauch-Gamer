//============================ DECLARATION FORMULAIRE ============================\\

(function () {
  'use strict'

  let form = document.getElementById('lessonForm');

  form.addEventListener('submit', function (event) {

    Array.from(form.elements).forEach((input) => {
      if (input.type !== "submit") {
        if (!validateFields(input)) {

          event.preventDefault();
          event.stopPropagation();

          input.classList.remove("is-valid");
          input.classList.add("is-invalid");
          input.nextElementSibling.style.display = 'block';
        }
        else {
          input.nextElementSibling.style.display = 'none';
          input.classList.remove("is-invalid");
          input.classList.add("is-valid");
        }
      }
    });
  }, false)

})()

//============================ FONCTIONS DE VALIDATION ============================\\

// Validation d'un champ REQUIRED
function validateRequired(input) {
  return !(input.value == null || input.value == "")
}

// Validation du nombre de caractères : MIN & MAX
function validateLength(input, minLength, maxLength) {
  return !(input.value.length < minLength || input.value.length > maxLength)
}

// Validation des caractères : LATIN & LETTRES
function validateText(input) {
  return input.value.match("^[A-Za-z]+$")
}

// Validation Email
function validateEmail(input) {
  let EMAIL = input.value
  let POSAT = EMAIL.indexOf("@")
  let POSDOT = EMAIL.lastIndexOf(".")

  return !(POSAT < 1 || (POSDOT - POSAT < 2))
}

// Validation Code Postal
function validatePostCode(input) {
  return input.value.match("^(0[1-9]|[1-9][0-9])[0-9][0-9][0-9]$")
}

// Validation adresse
function validateAddress(input) {
  return input.value.match(/^\s*\S+(?:\s+\S+){2}/)
}

// Validation téléphone
function validatePhoneNumber(input) {
  return input.value.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/);
}

//============================ VALIDATION FORMULAIRE ============================\\

function validateFields(input) {

  let fieldName = input.name

  // Validation input Prénom
  if (fieldName == "firstName") {
    if (!validateRequired(input)) {
      return false
    }

    if (!validateLength(input, 2, 20)) {
      return false
    }

    if (!validateText(input)) {
      return false
    }

    return true
  }

  //Validation input Nom
  if (fieldName == "lastName") {
    if (!validateRequired(input)) {
      return false
    }

    if (!validateLength(input, 2, 20)) {
      return false
    }

    if (!validateText(input)) {
      return false
    }

    return true
  }

  // Validation input Email
  if (fieldName == "email") {
    if (!validateRequired(input)) {
      return false
    }

    if (!validateEmail(input)) {
      return false
    }

    return true
  }

  // Validation input Telephone
  if (fieldName == "phoneNumber") {
    if (!validateRequired(input)) {
      return false
    }

    if (!validatePhoneNumber(input)) {
      return false
    }

    return true
  }

  // Validation input Adresse
  if (fieldName == "address") {
    if (!validateRequired(input)) {
      return false
    }

    if (!validateAddress(input)) {
      return false
    }

    return true
  }

  // Validation input Ville
  if (fieldName == "city") {
    if (!validateRequired(input)) {
      return false
    }

    if (!validateLength(input, 2, 20)) {
      return false
    }

    if (!validateText(input)) {
      return false
    }

    return true
  }

  // Validation input Code Postal
  if (fieldName == "postCode") {
    if (!validateRequired(input)) {
      return false
    }

    if (!validatePostCode(input)) {
      return false
    }

    return true
  }
}
