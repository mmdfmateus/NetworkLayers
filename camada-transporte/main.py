import os

messageReceived = 'CLIENT4-CLIENT3-mensagem.txt'
segmentSent = 'CLIENT3-CLIENT1-segmento.txt'
segmentReceived = 'CLIENT3-CLIENT1-segmento.txt'

def getMessageLength(filename):
    return os.stat(filename).st_size

def getMessageSequence():
    
    return 1

def getSegmentSentHeader(length, sequence):
    header = "SEQUENCE: " + str(sequence) + "\nLENGTH: " + str(length)
    return header

def getMessageReceivedBody(filename): #thats wrong
    file = open(filename, 'r')
    body = file.read().split("DATA")[1].split("\n.\n")[0]
    return body

def sendSegment(header, body):
    file = open(segmentSent, 'w')
    file.write(header)
    file.write(body)
    file.close()
    return True

length = getMessageLength(messageReceived)
sequence = getMessageSequence()

header = getSegmentSentHeader(length, sequence)
body = open(messageReceived, 'r').read() #getMessageReceivedBody(messageReceived)

success = sendSegment(header, body)
print header