from flask import Flask, render_template
import os

imgFolder = os.path.join('static', 'image')
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = imgFolder

@app.route('/')
@app.route('/index')
def show_index():
     imageList = os.path.join(app.config['UPLOAD_FOLDER'], 'gpcollege.jpg')
     imageList1 = os.path.join(app.config['UPLOAD_FOLDER'], 'gate.jpg')
     imageList2 = os.path.join(app.config['UPLOAD_FOLDER'], 'itcollege.jpg')
     imageList3 = os.path.join(app.config['UPLOAD_FOLDER'], 'college3.jpg')
     return render_template("index.html", user_image = imageList,user_image1 = imageList1,user_image2 = imageList2,user_image3 = imageList3)

@app.route('/index')
def index():
   return render_template("index.html")

@app.route('/student')
def student():
   imageList = os.path.join(app.config['UPLOAD_FOLDER'], 'gpcollege.jpg')
   return render_template("student.html", user_image = imageList)
@app.route('/Photo')
def Photo():
     imageList1 = os.path.join(app.config['UPLOAD_FOLDER'], 'gate.jpg')
     imageList2 = os.path.join(app.config['UPLOAD_FOLDER'], 'itcollege.jpg')
     imageList3 = os.path.join(app.config['UPLOAD_FOLDER'], 'college3.jpg')
     return render_template("Photo.html", user_image1 = imageList1,user_image2 = imageList2,user_image3 = imageList3)
@app.route('/course')
def course():
   imageList = os.path.join(app.config['UPLOAD_FOLDER'], 'gpcollege.jpg')
   return render_template("course.html",user_image = imageList)
@app.route('/contact')
def contact():
   imageList = os.path.join(app.config['UPLOAD_FOLDER'], 'gpcollege.jpg')
   return render_template("contact.html",user_image = imageList)
 

if __name__ == '__main__':
   app.run( debug=True, port=2000)

