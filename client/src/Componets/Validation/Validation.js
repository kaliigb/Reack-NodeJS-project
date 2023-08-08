// Basic email validation
export function isValidEmail(email) {
  const  emailExists=true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailExists) {
      return { valid: false, message: 'Email already exists' };
    }
    else
        return emailRegex.test(email);
  }
  export function isValidName(name) {
    // Check if the name is a string and not empty
    if (typeof name !== 'string' || name.length <= 2) {
      return false;
    }
  
    // Define additional validation rules for a valid name
    // For example, the name should not contain special characters or numbers
    const nameRegex = /^[a-zA-Z\s']+$/; // Allow letters, spaces, and apostrophes (for names like "O'Connor")
    if (!nameRegex.test(name)) {
      return false;
    }
    return true;
  }
  // Basic password validation
  export function isValidPassword(password) {
    return password.length >= 8;
  }
  // Additional password validation (example: must contain at least one uppercase letter and one number)
export function isStrongPassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
  }

// Function to validate the form values
export function validateFormValues(formValues) {
  if (!formValues.catalogNumber || !formValues.name || !formValues.price || !formValues.quantity) {
    return "All fields are required.";
  }

  if (isNaN(parseFloat(formValues.price)) || isNaN(parseInt(formValues.quantity))) {
    return "Price and Quantity must be valid numbers.";
  }

  return null; // If all checks pass, return null to indicate no errors
}
