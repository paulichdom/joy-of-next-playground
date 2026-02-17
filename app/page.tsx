import { Code } from "bright";
import { MainWrapper } from "./components/MainWrapper";
import Snippet from "./components/Snippet";

Code.theme = 'github-dark'

function Home() {
  return (
    <MainWrapper>
      <h1>Introduction to Python</h1>
      <h2>Variables and Basic Data Types</h2>
      <p>
        Python is a high-level, interpreted programming language. In Python, you
        don&apos;t need to specify the data type of a variable when you declare
        it. Python automatically determines the data type based on the value you
        assign.
      </p>

      <Snippet>
        <Code lang="py" title="shiny.js" lineNumbers>{FIRST_SNIPPET}</Code>
      </Snippet>

      <h2>Control Flow: Conditionals and Loops</h2>
      <p>
        Python has standard control flow structures like if statements, for and
        while loops.
      </p>

      <Snippet>
        <Code>{FIRST_SNIPPET}</Code>
      </Snippet>

      <h2>Functions and Basic Data Structures</h2>

      <p>
        In Python, you can define your own functions using the def keyword.
        Python also has built-in data structures like lists and dictionaries.
      </p>

      <Snippet>
        <Code>{FIRST_SNIPPET}</Code>
      </Snippet>
    </MainWrapper>
  );
}

const FIRST_SNIPPET = `\
# This is a comment. Python ignores anything after the # symbol
name = "John Doe"  # This is a string
age = 30  # This is an integer
height = 5.9  # This is a floating point number

# Let's print these out
print("Name:", name)
print("Age:", age)
print("Height:", height)\
`;
const SECOND_SNIPPET = `\
# If statement
if age > 18:
    print(name, "is an adult.")
else:
    print(name, "is a minor.")

# For loop
for i in range(5):  # range(5) generates numbers from 0 to 4
    print(i)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1  # This is the same as 'count = count + 1'\
`;
const THIRD_SNIPPET = `\
# Define a function
def greet(name):
    return "Hello, " + name

# Call the function
print(greet("John Doe"))

# List
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Dictionary
person = {"name": "John Doe", "age": 30, "height": 5.9}
for key, value in person.items():
    print(key, ":", value)\
`;

export default Home;
