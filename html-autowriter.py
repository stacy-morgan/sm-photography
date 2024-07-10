#html-autowriter.py
import os
def wn(indents, ln):
    global file

    spaces = indents*4
    for x in range(spaces):
        file.write(' ')
    file.write(ln)
    file.write('\n')

def w(indents, ln):
    global file

    spaces = indents*4
    for x in range(spaces):
        file.write(' ')
    file.write(ln)

def getJSname(string):
    string = string.replace('0', '')
    string = string.replace('1', '')
    string = string.replace('2', '')
    string = string.replace('3', '')
    string = string.replace('4', '')
    string = string.replace('5', '')
    string = string.replace('6', '')
    string = string.replace('7', '')
    string = string.replace('8', '')
    string = string.replace('9', '')

    translation_table = str.maketrans('', '', string.lower())
    # Remove lowercase and convert uppercase to lowercase
    string = string.translate(translation_table).lower()

    return string

destination_name = input("destination name:\n(example: sandiego)\n>")
html_filename = input("html filename:\n(example: 1wany)\n>")

if ".html" not in html_filename:
    html_prev = html_filename
    html_filename += ".html"
print(f"(corrected \"{html_prev}\" to \"{html_filename}\")")

src_dirname = input("directory name in src:\n(example: San_Diego_2024)\n>")
webpage_title = input("webpage title:\n>")
subdest_title = input("sub-destination title:\n>")
subdest_date = input("sub-destination date:\n>")
file = open('site/gallery/dest_subpages/'+str(destination_name)+str('/')+str(html_filename), 'w+')
file.write('<!--')
file.write(html_filename)
w(0,"-->\n")

#Head
wn(0, "<!DOCTYPE html>")
wn(0,"<html lang=\"en\">")
wn(1,"<head>")
wn(1,"<meta charset=\"UTF-8\">")
wn(1,"<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">")
wn(1,"<link rel=\"stylesheet\" href=\"../../../../css/oldsite-css/scrollable-buttons.css\">")
wn(1,"<link rel=\"stylesheet\" href=\"../../../../css/oldsite-css/styles.css\">\n")

wn(1,"<link rel=\"stylesheet\" href=\"../../../../css/headerbar.css\">")
wn(1,"<link rel=\"stylesheet\" href=\"../../../../css/main.css\">")

#Title
file.write("<title>")
file.write(webpage_title)
file.write("</title>\n")
wn(1,"\n</head>\n")

#Body
wn(1,"<body>")
wn(2,"<div id=\"horizontal-bar\"></div>")
wn(2,"<button id=\"homeBtn\">SM Photography</button>")
wn(2,"<div class=\"topMenu\">")
wn(3,"<button id=\"galleryBtn\">Gallery</button>")
wn(3,"<button id=\"aboutBtn\">About</button>")
wn(3,"<button id=\"contactBtn\">Contact</button>")
wn(3,"<button id=\"4-___\">...</button>")
wn(2,"</div>")

#h1
w(2,"<button id=\"h1\">")
w(0,subdest_title)
wn(0,"</button>")
wn(2,"<div id=\"date-div\"></div>")

#date-subtitle
w(2,"<div id=\"date-subtitle\">")
w(0,subdest_date)
wn(0,"</div>")

wn(2,"<div id=\"picture-title\"></div>")
wn(2,"<div id=\"picture-data\">Content loading...</div>\n")

#Scrollable container
wn(1,"<div class=\"scrollable-container\">")
wn(2,"<div class=\"nav-btns2\">")
wn(3,"<button id=\"back\">&lt;&lt; back</button>")
wn(2,"</div>\n")

wn(2,"<div class=\"imgBtns\">")

dirName = html_filename.replace(".html", '')
path = "../../../../src/"+str(src_dirname)+str('/')+str(dirName)+str('/')

print(path)

codePath = 'src/'+str(src_dirname)+str('/')+str(dirName)
files = os.listdir(codePath)
print(files)

#Write imgBtn class divs
for x in range(len(files)):
    w(3,"<input id=\"b_i")
    w(0,str(x+1))
    w(0,"\" type=\"image\" src=\"")
    w(0,path)
    w(0, files[x])
    wn(0,"\" width=\"100\" height=\"48\"/>")

wn(2,"</div>")
wn(2,"<p></p> <!-- needed to keep the scroll -->")
wn(1,"</div>\n")

#Write imgs class divs
wn(1,"<div class=\"imgs\">")
for x in range(len(files)):
    w(2,"<img id=\"b_i")
    w(0,str(x+1))
    w(0, "\" src=\"")
    w(0,path)
    w(0, files[x])
    wn(0,"\" loading=lazy>")

#Close up the divs
wn(1, "</div>")
wn(1, "<div id=\"vertical_bar\"></div>")
wn(1, "</div>\n")
wn(1, "</body>")

#JavaScript linking

#Step 1: Calculate JavaScript shortname
js_shortName = getJSname(src_dirname)
print(f"{src_dirname} -> {js_shortName}")

#0xx_galleryLoader
wn(1,"<script src=\"../../../../js/destinationJS/")
wn(0,js_shortName)
wn(0, html_prev)
wn(0, "_galleryLoader.js\" async></script>")

#xx_navigation
w(1,"<script src=\"../../../../js/destinationJS/")
w(0,js_shortName+str('/'))
wn(0,js_shortName+str("_navigation.js\" async></script>"))

wn(1,"<script src=\"../../../../js/subdestNav.js\" async></script>")