function rot13(str) {
  const strArray = str.split('')

  for  (let i  = 0; i < strArray.length; i++){
    const char = strArray[i];
    if(/[A-Za-z]/.test(char)) {
      const isUpperCase = char === char.toUpperCase();
      const alphabet = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';
      const index = alphabet.indexOf(char)
      const newIndex = (index + 13) % 26;
      const newChar = alphabet[newIndex];
      strArray[i] = isUpperCase ? newChar : newChar.toLowerCase()
    }
  }
  return strArray.join('');
}

rot13("SERR PBQR PNZC");
