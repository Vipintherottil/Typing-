# Typing Practice

#### Video Demo: <URL HERE>

## Description:

This is a simple **REACT** web app, that helps you improve your _typing speed_ . It is very useful and it always focuses on your typing skill with speed and accuracy. This application gathers a handful of interesting exercise for the users that will help them to type fast and accurately. There are a lot of lessons to improve your typing skill. The lessons will allow you practicing typing fast and accurate with a sequence.

- It always inspects your typing speed and accuracy.

- Calculate the speed and accuracy as well as your progression of typing.

- Finds all the mistakes you make, and highlight the errors. <br></br>

![home](/images/home.png)

![lesson](/images/lesson.png)<br></br>

## How to

When the app is launched, it will show you a random lesson in the board, then start typing the text displayed on the board. When you finished the current lesson press _enter_ to view your result.

- For helping you focus on next word typing, it darkens the completed text.

- When you make a mistake it will change the color of the word to _red_.

- The text changes for each new lesson.

- When you complete each lesson, the application will show you the speed and accuracy of each lesson and how many mistakes you make.

- Typing speed is measured in Words per Minute (WPM)

- Accuracy is measured as the percentage of letters typed without errors.

- Errors shows you how many typos there are in the current lesson<br></br>

> When you are typing these words, the application measures the time to complete each lesson. This time is used to measure your learning progress, and calculate the speed and accuracy.

<br></br>

## Others

- The app is developed in react.js

- Formulas used in the app to calculate speed and accuracy.

  - The gross typing speed is calculated by taking all words typed and dividing by the time it took to type the words in minutes.

  - The definition of a word is standardized to be five characters

  - The Net WPM is calculated by taking gross WPM result and subtract the amount of errors left in per minute

  - The error rate is calculated by dividing the number of errors by the time taken to type.

  - The accuracy is calculated by, taking the number of correct characters typed, dividing it by the total number, and multiplying by 100%.

- The _typing icon_ in the title bar is created by [Freepik-Flaticon](https://www.flaticon.com/free-icons/typing)
