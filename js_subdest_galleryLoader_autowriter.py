#js_subdest_galleryLoader_autowriter.py

destination_name = ''
html_filename = ''
src_dirname = ''
subdest_title = ''
subdest_date = ''
webpage_title = ''
dest_subpage_name = ''

file = None

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

def wc(indents, ln):
    global file

    spaces = indents*4
    for x in range(spaces):
        file.write(' ')
    file.write(ln)
    file.close()

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

def run_autowriter():
    global destination_name
    global html_filename
    global src_dirname
    global webpage_title
    global subdest_title
    global subdest_date
    print(html_filename)
    html_prev = html_filename
    if ".html" not in html_filename:
        html_filename += ".html"
        print(f"(corrected \"{html_prev}\" to \"{html_filename}\")")
    dest_subpage_name = html_filename.replace('.html', '')

    # src_dirname = input("directory name in src:\n(example: San_Diego_2024)\n>")
    # webpage_title = input("webpage title:\n>")
    # subdest_title = input("sub-destination title:\n(example: \"SM Photography - NY & Chicago Subpage\")\n>")
    # subdest_date = input("sub-destination date:\n(example: \"San<br>Diego,<br>California\")\n>")
    global file
    file = open('site/js/destinationJS/'+str(destination_name)+str('/')+str(html_filename+str('_galleryLoader.js')), 'w+')
    wn(0,'//'+html_filename+str('_galleryLoader.js'))

    #Head
    wn(0, "<!DOCTYPE html>")
    wn(0,"<html lang=\"en\">")
    wn(1,"<head>")
    wn(1,"<meta charset=\"UTF-8\">")
    wn(1,"<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">")
    wn(1,"<link rel=\"stylesheet\" href=\"../../../../css/oldsite-css/scrollable-buttons.css\">")
    wn(1,"<link rel=\"stylesheet\" href=\"../../../../css/oldsite-css/styles.css\">\n")

    wn(1,"<link rel=\"stylesheet\" href=\"../../../../css/headerbar.css\">")
    wn(1,"<link rel=\"stylesheet\" href=\"../../../../css/main.css\">\n")

    #Title
    w(1,"<title>")
    w(0,webpage_title)
    wn(0,"</title>\n")
    wn(1,"</head>\n")

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
    wn(1, "<div class=\"vertical-bar\"></div>")
    wn(1, "</div>\n")
    wn(1, "</body>")

    #JavaScript linking

    #Step 1: Calculate JavaScript shortname
    js_shortName = getJSname(src_dirname)
    print(f"{src_dirname} -> {js_shortName}")

    #0xx_galleryLoader
    w(1,"<script src=\"../../../../js/destinationJS/")
    w(0,js_shortName+str('/'))
    w(0, dest_subpage_name)
    wn(0, "_galleryLoader.js\" async></script>")

    #xx_navigation
    w(1,"<script src=\"../../../../js/destinationJS/")
    w(0,js_shortName+str('/'))
    wn(0,js_shortName+str("_navigation.js\" async></script>"))

    wc(1,"<script src=\"../../../../js/subdestNav.js\" async></script>")

###############################################################################
#init main:
input_mode = input("[a]utomatic or [m]anual:")
if input_mode == 'a':
    f2 = open("html-autowriter-queue.txt", 'r')
    f2_data = f2.readlines()
    for x in range(len(f2_data)):
        if f2_data[x][0] == "#":
            pass
        else:
            #Read data from txt file and import to variables
            lnData = f2_data[x].split(':')
            if lnData[0] == "destination_name":
                destination_name = lnData[1]
                destination_name = destination_name.replace('\n','')

            if lnData[0] == "html_filename":
                html_filename = lnData[1]
                html_filename = html_filename.replace('\n','')

            if lnData[0] == "src_dirname":
                src_dirname = lnData[1]
                src_dirname = src_dirname.replace('\n','')

            if lnData[0] == "subdest_date":
                subdest_date = lnData[1]
                subdest_date = subdest_date.replace('\n','')

            if lnData[0] == "subdest_title":
                subdest_title = lnData[1]
                subdest_title = subdest_title.replace('\n','')

            if lnData[0] == "webpage_title":
                webpage_title = lnData[1]
                webpage_title = webpage_title.replace('\n','')

            if destination_name != '' and src_dirname != '':
                if webpage_title != '' and subdest_title != '':
                    if subdest_date != '' and html_filename != '':
                        run_autowriter()

else:
    destination_name = input("destination name:\n(example: sandiego)\n>")
    html_filename = input("html filename:\n(example: 1wany)\n>")
    src_dirname = input("directory name in src:\n(example: San_Diego_2024)\n>")
    webpage_title = input("webpage title:\n>")
    subdest_title = input("sub-destination title:\n(example: \"SM Photography - NY & Chicago Subpage\")\n>")
    subdest_date = input("sub-destination date:\n(example: \"San<br>Diego,<br>California\")\n>")
    destination_name = input("destination name:\n(example: sandiego)\n>")
    html_filename = input("html filename:\n(example: 1wany)\n>")

def autorun(import_list):
    global destination_name
    global html_filename
    global src_dirname
    global subdest_date
    global subdest_title
    global webpage_title

    destination_name = import_list[0]
    html_filename = import_list[1]
    src_dirname = import_list[2]
    subdest_date = import_list[3]
    subdest_title = import_list[4]
    webpage_title = import_list[5]
    run_autowriter()

