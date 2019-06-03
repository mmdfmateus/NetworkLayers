hosts = open("hosts.txt", "r")

print("   NAME        IP")
print("-----------------")
for line in hosts:
    print (line.split(",")[0] + "     " + line.split(",")[1])