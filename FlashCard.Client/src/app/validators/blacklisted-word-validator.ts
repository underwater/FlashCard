import { FormControl } from '@angular/forms';

function blackListedWordValidator(c: FormControl) {
  const blockedDomain = '.gr';
  const isValid = blockedDomain.includes(c.value);
  return isValid ? null : {
    blackListedWordValidator: {
      valid: false
    }
  };
}
