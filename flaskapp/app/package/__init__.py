from flask import Flask
 
app = Flask(__name__)
app.secret_key = 'secrets_are_meant_to_be_kept'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://rudradeep:gautamrupa@localhost/EmpData'
from models import db
db.init_app(app)
import package.routes
