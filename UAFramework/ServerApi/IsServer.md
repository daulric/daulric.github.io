# **This is the IsServer Documentation From the UAFramework**


### Calls this IsServer Class from the UAFramework Package
``` lua
local UAFramework = require(path.to.module)
local IsServer = UAFramework.IsServer
```

# **Methods**
``` lua
IsServer:ServerType() -- return 'Private', 'Reserve' or 'Public'
```
### This will return 'Private', 'Reserve' or 'Public' depending on the server type

#
``` lua
IsServer.PrivateServerStarted:Connect(function(player)
    -- code here
end)
```

This is will fire when the owner of the private server has joined the server
#