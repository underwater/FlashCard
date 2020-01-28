import { FormControl, AbstractControl } from '@angular/forms';

export function blackListedWordValidator(c: FormControl) {
  const blockedWords = 'xxx';
  const inputData: string = c.value;
  // TODO: why isn't this working ? https://stackoverflow.com/questions/6629728/check-if-a-string-has-a-certain-piece-of-text
  const isValid = !inputData.includes(blockedWords);
  return isValid ? null : {
    blackListedWordValidator: {
      valid: false
    }
  };
}
