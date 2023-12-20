const sentenceStr = "this is js string programe"
console.log(sentenceStr)

const words = sentenceStr.split(" ")
const lastWord = words[words.length - 1]
// console.log(lastWord)
const newWord = lastWord.replace(lastWord.charAt(0), lastWord.charAt(0).toUpperCase())
// console.log(newWord)
words.pop()
words.push(newWord)

const newSentence=words.join(" ")
console.log(newSentence)