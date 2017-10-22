from pyflights import PyFlight
import json

flight = PyFlight(api_key='AIzaSyBNFMQ6w1pnPwjAudfZw-iliHUucHRxqiA')

# parameters:
adults = 1
origin = 'SFO'
price  = 'USD1000'
dest   = 'SIN'
date   = '2017-10-25'

search = flight.search(params={
        'adult_count': '%d'%adults,
        'origin': '%s'%origin,
        'max_price': '%s'%price,
        'destination': '%s'%dest,
        'date': '%s'%date,
        'solutions': 15
})


#For JSON output
for results in search:
    output =  json.dumps({
        'id' : results.flight_number(),
        'date' : date,
        'departs_at' : results.departure_time(),
        'arrives_at' : results.arrival_time(),
        'price' : results.sale_total()},
        sort_keys=True, indent=4, separators=(',',': '))

    print(output)

# with open('jsondata.txt', 'w') as f:
#   json.dump(output, f, ensure_ascii=False)