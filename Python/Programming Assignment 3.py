def divide_numbers(num1, num2):
    """Divides two numbers and handles division by zero error."""
    if num2 == 0:
        raise ZeroDivisionError("Error: Cannot divide by zero!")
    result = num1 / num2
    return result


# Get user input
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

try:  # Try-except block for error handling
    result = divide_numbers(num1, num2)
    print("The result of the division is", result)
except ZeroDivisionError as e:
    print(e)  # Print the error message
    print("\n**Error Handling Explanation:**")
    print("The program encountered a 'ZeroDivisionError' because you tried to divide",
          num1, "by zero.\n Remember, division by zero is mathematically undefined and leads to runtime errors.")
