def invert_dict(dict_in):
    inverted_dict = {}
    for key, value_list in dict_in.items():
        for course in value_list:
            if course in inverted_dict:
                inverted_dict[course].append(key)
            else:
                inverted_dict[course] = [key]
    return inverted_dict


# Sample input
sample_input = {
    'Stud1': ['CS1101', 'CS2402', 'CS2001'],
    'Stud2': ['CS2402', 'CS2001', 'CS1102']
}

# Call the function and print the output
inverted_output = invert_dict(sample_input)
print(inverted_output)
