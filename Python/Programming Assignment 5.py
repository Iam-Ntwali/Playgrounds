my_name = "Ntwali"
n = int(input("Enter the number of characters to display from the left: "))


def display_n_characters(name, n):  # Display n characters from left
    if n > 0:
        print(f"{n} characters from left: {name[:n]}")
    else:
        print("Invalid input. Please enter a positive number of characters.")


def count_vowels(name):  # Count the number of vowels
    vowels = "aeiouAEIOU"
    vowel_count = 0
    for char in name:
        if char in vowels:
            vowel_count += 1
    return vowel_count


def reverse_string(name):  # Reverse the string
    return name[::-1]


# Function calls to demonstrate the functionalities
display_n_characters(my_name, n)  # Display characters based on n numbers
# Display name's vowels count
print(f"Number of vowels: {count_vowels(my_name)}")
print(f"Reversed name: {reverse_string(my_name)}")  # Reverse the string name
