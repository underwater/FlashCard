import { FormControl, AbstractControl } from '@angular/forms';

export function blackListedWordValidator(c: FormControl) {
  const blockedWords = 'xxx';
  const inputData: string = c.value;
  const isValid = !inputData.includes(blockedWords);
  return isValid ? null : {
    blackListedWordValidator: {
      valid: false
    }
  };
}
