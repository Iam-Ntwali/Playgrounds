# Python program to invert a dictionary from a file
def invert_dictionary(file_path, output_path):
    try:
        # Read the original dictionary from the file
        with open(file_path, 'r') as file:
            original_dict = {}
            for line in file:
                key, values = line.strip().split(': ')
                original_dict[key] = values.split(', ')

        # Invert the dictionary
        inverted_dict = {}
        for key, values in original_dict.items():
            for value in values:
                if value in inverted_dict:
                    inverted_dict[value].append(key)
                else:
                    inverted_dict[value] = [key]

        # Write the inverted dictionary to the output file
        with open(output_path, 'w') as file:
            for key, values in inverted_dict.items():
                line = f"{key}: {', '.join(values)}"
                file.write(line + '\n')

    except FileNotFoundError:
        print(f"Error: The file '{file_path}' was not found.")


# Call the function with the input and output file paths
invert_dictionary('original_dictionary.txt', 'inverted_dictionary.txt')
