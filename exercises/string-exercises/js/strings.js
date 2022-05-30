class StringFunctions {
    /**
     * @param {string} input
     * @returns {string}
     * @example
     * capitalize('hello world') // 'Hello world'
     * capitalize('HELLO WORLD') // 'Hello world'
     */
    capitalize(input) { 
      input = document.getElementById("capitalize").style.textTransform = "uppercase"
      //got this from https://www.w3schools.com/jsref/prop_style_texttransform.asp
      return input; 
    }
    /**
     * Returns a reversed string. Example: "abc" => "cba"
     * @param {string} input - the string input to be processed 
     * @returns  {string} - the reversed string
     * @example
     * reverse('abc') // 'cba'
     */
    reverse(input) { 
      input = document.getElementById("reverse").split("").reverse().join("");
      return input;
    }
    /**
     * Returns an array of the words in a string
     * @param {string} input - the string input to be processed
     * @returns {string[]} - an array of words in the string
     * @example
     * words('hello world') // ['hello', 'world']
     */
    split(input,splitAt= ',') { 
      input = document.getElementById("split").split(splitAt)
      return [input];
    }
}
