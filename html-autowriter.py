#html-autowriter.py
def w(indents, ln):
    global file

    spaces = indents*4
    for x in range(spaces):
        file.write(' ')
    file.write(ln)
    file.write('\n')
destination_name=input("destination name:\n>")
html_filename = input("html filename:\n>")
webpage_title = input("webpage title:\n>")

file = open('site/gallery/dest_subpages/'+str(destination_name)+str('/')+str(html_filename))
file.write('<!--')
file.write(html_filename)
w(0,"-->\n")

#Head
w(0, "<!DOCTYPE html>")
w(0,"<html lang=\"en\">")
w(1,"<head>")
w(1,"<meta charset=\"UTF-8\">")
w(1,"<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">")
w(1,"<link rel=\"stylesheet\" href=\"../../../../css/oldsite-css/scrollable-buttons.css\">")
w(1,"<link rel=\"stylesheet\" href=\"../../../../css/oldsite-css/styles.css\">\n")
w(1,"<link rel=\"stylesheet\" href=\"../../../../css/headerbar.css\">")
w(1,"<link rel=\"stylesheet\" href=\"../../../../css/main.css\">")

#Title
file.write("<title>")
file.write(webpage_title)
file.write("</title>\n")
file.write("\n</head>")

#Body