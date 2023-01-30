# **This is the Event Class Documentation from the UAFramework**


## Call the Event Class from the UAFramework

``` lua
local UAFramework = require(path.to.module)
local Event = UAFramework.Event -- this gets the event module from the package
```

### Code will call when even is fired


``` lua
local Connection = Event:ListenForEvent("id here", function(value) -- paramaters here
-- this is where the

    print("Value:", value)
    return value -- returns if remote or bindable function is called
end)-- this returns the status of the event
```

### This stops all event used in this module
``` lua
Event:DisconnectAll()
```

#### **Other things we can do with the event!**

``` lua
Connection.Execute() 
```
This execute the code without the firing the remote/bindable event or function.

```
Connection:Stop()
```
This disconnects the event

```
Connection:GetStatus()
```
This returns the status of the event

# **Methods to Send Data From Client to Server**

``` lua
Event:SendServer(id, ...)
```
This sends data to the server

``` lua
Event:GetServer(id, ...)
```
This sends and returns data from the server

# **Methods to Send Data From Server To Client**
``` lua
Event:SendClient(player, id, ...)
```
This sends data from the server to a specific client

``` lua
Event:SendAllClients(id, ...)
```
This sends data to all clients in the server

``` lua
Event:GetClient(player, id, ...)
```
This sends and returns data from the client

# **Methods to Send Data Either From Server To Server or Client To Client**

``` lua
Event:FireDataToCom(id, ...)
```
This sends data to another server or client

``` lua
Event:GetDataFromCom(id, ...)
```
This send and returns data from another server or client