def greet(name):  # 'name' is the parameter
    print("Hello,", name)

greet("Alice")  # "Alice" is the argument

greet("Bob") # Call the function with a value

person = "Charlie"
greet(person) # Call the function with a variable

greet("John" + " & " + "Diana") # Call the function with an expression


def funcScope():
    x = 10  # Local variable
    print(x)
funcScope()

# Attempting to access the local variable outside the function
# print(x)  # This will result in a NameError

def my_fn(uniqueNum):  # Parameter 'uniqueNum' is unique to this function
    print(uniqueNum)

my_fn(5)

# Trying to use the parameter name 'uniqueNum' outside the function
# print(uniqueNum)  # This will result in a NameError




person = "John"
def user():
    person = "Smith"  # Local variable with the same name as global variable
    print("Inside variable User:", person)
user()

print("Outside variable user:", person)

