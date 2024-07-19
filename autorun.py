#autorun.py

import html_autowriter as htmlPy
import js_subdest_galleryLoader_autowriter as jsPy

destination_name = ''
src_dirname = ''
webpage_title = ''
subdest_title = ''
subdest_date = ''
html_filename = ''

#Get variables for autorun 
f2 = open("autorun_queue.txt", 'r')
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
                    import_list = [
                        destination_name,
                        html_filename,
                        src_dirname,
                        subdest_date,
                        subdest_title,
                        webpage_title
                    ]

                    htmlPy.run_autowriter(import_list)
                    #jsPy.run_autowriter(import_list)

