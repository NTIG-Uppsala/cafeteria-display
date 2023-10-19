import os
import platform
from http.server import HTTPServer, SimpleHTTPRequestHandler
from os import getcwd, path

if platform.system() == "Windows":
    cwd = getcwd()
    os.chdir(cwd + "/public")
elif platform.system() == "Linux":
    os.chdir("../../public")
serverAddress = ("", 8080)
httpd = HTTPServer(serverAddress, SimpleHTTPRequestHandler)
httpd.serve_forever()
