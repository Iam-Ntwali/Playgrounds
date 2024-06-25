try:
    with open("non_existent_file.txt", "r") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("The file 'non_existent_file.txt' does not exist.")

import os
cwd = os.getcwd()

print(os.path.isdir(cwd))
print(os.path.exists(cwd))
print(os.path.isfile(cwd))
print(os.listdir(cwd))
