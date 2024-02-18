import os
from dotenv import load_dotenv
from flask import Flask, render_template, request, abort, session
from twilio.jwt.access_token import AccessToken
from twilio.jwt.access_token.grants import VideoGrant
from flask_socketio import SocketIO
import string
import random

roomN = 10
caller = None
ids = []
load_dotenv()
twilio_account_sid = os.environ.get('TWILIO_ACCOUNT_SID')
twilio_api_key_sid = os.environ.get('TWILIO_API_KEY_SID')
twilio_api_key_secret = os.environ.get('TWILIO_API_KEY_SECRET')
app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.get_json(force=True).get('username')
    if not username:
        abort(401)

    token = AccessToken(twilio_account_sid, twilio_api_key_sid,
                        twilio_api_key_secret, identity=username)
    token.add_grant(VideoGrant(room='My Room'))
    return {'token': token.to_jwt()}


@socketio.on('connected')
def new_connection(json):
    print("new connect" + request.sid)
    if request.sid not in ids:
        ids.append(request.sid)
        
@socketio.on('call')
def request_call(json):
    print("call request from"+ request.sid)
    caller = request.sid
    print(ids)
    for id in ids:
        if(id!= request.sid):
            socketio.emit("call incoming", request.sid ,to = id)
            
@socketio.on('answer call')
def answer_call(json):
    print("starting call")
    socketio.emit("start call", "".join(random.choices(string.ascii_uppercase + string.digits, k = roomN)), to=caller)
        
@socketio.on("disconnected")
def disconnect(json):
    ids.remove(request.sid)
    
if __name__ == '__main__':
    socketio.run(app, port = 5000, cors_allowed_origins="*")