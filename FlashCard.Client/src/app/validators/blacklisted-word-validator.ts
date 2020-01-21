import { FormControl, AbstractControl } from '@angular/forms';

export function blackListedWordValidator(c: FormControl) {
  const blockedWords = 'xxx';
  // TODO: why is c null?
  const isValid = !c.value.inlcudes(blockedWords);
  return isValid ? null : {
    blackListedWordValidator: {
      valid: false
    }
  };
}
