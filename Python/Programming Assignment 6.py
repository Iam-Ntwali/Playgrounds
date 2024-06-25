# Initial employee list
employee_names = ["John Doe", "Mark Zuck", "Steven Lee", "Eric Mbijeme", "Simon Paul",
                  "Emerson Gracias", "Janet Mason", "Jennifer Lopez", "Sandra Holard", "Moses Smith"]

# Create sub-lists with 5 names each
subList1 = employee_names[:5]
subList2 = employee_names[5:]

# Add new employee to subList2
subList2.append("Kriti Brown")

# Remove second employee's name from subList1
subList1.pop(1)

# Merge sub-lists
merged_list = subList1 + subList2

# Sample salary list (replace with your actual data)
salary_list = [2500, 8000, 6500, 9500, 5000, 4000, 6500, 1800, 3000, 1200]

# Give a 4% raise to each employee
for i in range(len(salary_list)):
    salary_list[i] *= 1.04

# Sort salary list in descending order
salary_list.sort(reverse=True)

# Display top 3 salaries
print("Top 3 Salaries after Raise:")
for i in range(3):
    print(f"${salary_list[i]:.2f}")


def sentence_to_reverse_wordlist(sentence):
    # Split sentence into words
    word_list = sentence.split()

    # Reverse the word list
    word_list.reverse()

    # Join the reversed words back into a sentence
    reversed_sentence = " ".join(word_list)

    return reversed_sentence


# Use Case
sentence = "Hello People"
reversed_words = sentence_to_reverse_wordlist(sentence)

print("Original Sentence:", sentence)
print("Reversed Sentence:", reversed_words)
