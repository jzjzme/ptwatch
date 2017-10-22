#!flask/bin/python
from flask import Flask, jsonify
from flask import request
from pyflights import PyFlight
import json
import nexmo #need to install nexmo

app = Flask(__name__)
flight = PyFlight(api_key='AIzaSyBNFMQ6w1pnPwjAudfZw-iliHUucHRxqiA')

@app.route('/search', methods=['GET'])
def search():
	# examples parameters:
	# adults = 1
	# origin = 'SFO'
	# price  = 'EUR500'
	# dest   = 'LAS'
	# date   = '2017-10-25'
	#http://127.0.0.1:5000/flights?adults=1&origin=SFO&price=EUR500&dest=LAS&date=2017-10-25

	adults = request.args.get('adults')
	origin = request.args.get('origin')
	price  = request.args.get('price')
	dest   = request.args.get('dest')
	date   = request.args.get('date')

	search = flight.search(params={
        'adult_count': '%s'%adults,
        'origin': '%s'%origin,
        'max_price': '%s'%price,
        'destination': '%s'%dest,
        'date': '%s'%date,
        'solutions': 1
	})
	for results in search:
	    output =  json.dumps(
	    	{
	        'id' : results.flight_number(),
	        'date' : date,
	        'departs_at' : results.departure_time(),
	        'arrives_at' : results.arrival_time(),
	        'price' : results.sale_total()
	        },
	        sort_keys=True, indent=4, separators=(',',': '))
    
	return output

@app.route('/message')
def message():

	client = nexmo.Client(key='d4f97f0e', secret='2e02d0a63e14517f')

	response = client.send_message({'from': '12012413501', 'to': '19169908919', 'text': 'Someone wants to purchase your points! <link>'})

	response = response['messages'][0]

	if response['status'] == '0':
	  print ('Sent message', response['message-id'])

	  print ('Remaining balance is', response['remaining-balance'])
	else:
	  print ('Error:', response['error-text'])


if __name__ == '__main__':
	app.run(debug=True)
